import { getTypeConfig } from "./config";
import { HARDCODED_EVIDENCE } from "./hardcodedEvidenceData";
import { SUPPLEMENTAL_EVIDENCE } from "./supplementalEvidenceData";

const DB_NAME = "portfolio-evidence-workspace";
const DB_VERSION = 1;
const EVIDENCE_STORE = "evidence";
const FILE_STORE = "files";
const HARDCODED_IMPORTED_AT = "2026-09-17T09:20:00.000Z";

const hardcodedCounters = new Map();
const hardcodedRecords = [...HARDCODED_EVIDENCE, ...SUPPLEMENTAL_EVIDENCE].map((item) => {
    const typeConfig = getTypeConfig(item.type);
    const next = (hardcodedCounters.get(item.type) || 0) + 1;
    hardcodedCounters.set(item.type, next);

    return {
        ...item,
        id: `hardcoded:${item.sourceImportId}`,
        evidenceId: `EV-${typeConfig.code}-${String(next).padStart(4, "0")}`,
        category: item.category || typeConfig.category,
        dateAdded: HARDCODED_IMPORTED_AT,
        updatedAt: HARDCODED_IMPORTED_AT,
        peopleInvolved: item.peopleInvolved || [],
        tags: item.tags || [],
        relatedEvidenceIds: item.relatedEvidenceIds || [],
        originalFilename: item.originalFilename || "",
        fileType: item.fileType || "",
        fileSize: 0,
        hasAttachment: Boolean(item.publicAttachmentPath),
        isBuiltIn: true,
    };
});

const hardcodedImportIds = new Set(hardcodedRecords.map((item) => item.sourceImportId));

const openDatabase = () => new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(EVIDENCE_STORE)) {
            const evidence = db.createObjectStore(EVIDENCE_STORE, { keyPath: "id" });
            evidence.createIndex("type", "type", { unique: false });
            evidence.createIndex("eventDate", "eventDate", { unique: false });
            evidence.createIndex("dateAdded", "dateAdded", { unique: false });
        }
        if (!db.objectStoreNames.contains(FILE_STORE)) {
            db.createObjectStore(FILE_STORE, { keyPath: "evidenceId" });
        }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
});

const transactionDone = (transaction) => new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
});

export const listEvidence = async () => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const request = db.transaction(EVIDENCE_STORE, "readonly").objectStore(EVIDENCE_STORE).getAll();
        request.onsuccess = () => {
            const localRecords = (request.result || []).filter((item) => !hardcodedImportIds.has(item.sourceImportId));
            resolve([...hardcodedRecords, ...localRecords]);
        };
        request.onerror = () => reject(request.error);
    });
};

const nextEvidenceId = (records, type) => {
    const { code } = getTypeConfig(type);
    const prefix = `EV-${code}-`;
    const next = records.reduce((highest, record) => {
        if (!record.evidenceId?.startsWith(prefix)) return highest;
        return Math.max(highest, Number(record.evidenceId.slice(prefix.length)) || 0);
    }, 0) + 1;
    return `${prefix}${String(next).padStart(4, "0")}`;
};

export const createEvidence = async (values, file) => {
    const records = await listEvidence();
    const id = crypto.randomUUID();
    const typeConfig = getTypeConfig(values.type);
    const record = {
        ...values,
        id,
        evidenceId: nextEvidenceId(records, values.type),
        category: values.category || typeConfig.category,
        dateAdded: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        peopleInvolved: values.peopleInvolved || [],
        tags: values.tags || [],
        relatedEvidenceIds: values.relatedEvidenceIds || [],
        originalFilename: file?.name || "",
        fileType: file?.type || "",
        fileSize: file?.size || 0,
        hasAttachment: Boolean(file),
    };

    const db = await openDatabase();
    const transaction = db.transaction([EVIDENCE_STORE, FILE_STORE], "readwrite");
    transaction.objectStore(EVIDENCE_STORE).add(record);
    if (file) {
        transaction.objectStore(FILE_STORE).put({ evidenceId: id, blob: file, name: file.name, type: file.type, size: file.size });
    }
    await transactionDone(transaction);
    return record;
};

export const bulkCreateEvidence = async (items) => {
    const existing = await listEvidence();
    const knownImportIds = new Set(existing.map((item) => item.sourceImportId).filter(Boolean));
    const counters = new Map();

    existing.forEach((record) => {
        const { code } = getTypeConfig(record.type);
        const prefix = `EV-${code}-`;
        if (record.evidenceId?.startsWith(prefix)) {
            counters.set(record.type, Math.max(counters.get(record.type) || 0, Number(record.evidenceId.slice(prefix.length)) || 0));
        }
    });

    const now = new Date().toISOString();
    const records = items
        .filter((item) => !item.sourceImportId || !knownImportIds.has(item.sourceImportId))
        .map((item) => {
            const typeConfig = getTypeConfig(item.type);
            const next = (counters.get(item.type) || 0) + 1;
            counters.set(item.type, next);
            return {
                ...item,
                id: crypto.randomUUID(),
                evidenceId: `EV-${typeConfig.code}-${String(next).padStart(4, "0")}`,
                category: item.category || typeConfig.category,
                dateAdded: now,
                updatedAt: now,
                peopleInvolved: item.peopleInvolved || [],
                tags: item.tags || [],
                relatedEvidenceIds: item.relatedEvidenceIds || [],
                originalFilename: "",
                fileType: "",
                fileSize: 0,
                hasAttachment: false,
            };
        });

    if (!records.length) return [];
    const db = await openDatabase();
    const transaction = db.transaction(EVIDENCE_STORE, "readwrite");
    const store = transaction.objectStore(EVIDENCE_STORE);
    records.forEach((record) => store.add(record));
    await transactionDone(transaction);
    return records;
};

export const getEvidenceFile = async (evidenceId) => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const request = db.transaction(FILE_STORE, "readonly").objectStore(FILE_STORE).get(evidenceId);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
    });
};

export const clearEvidenceWorkspace = async () => {
    const db = await openDatabase();
    const transaction = db.transaction([EVIDENCE_STORE, FILE_STORE], "readwrite");
    transaction.objectStore(EVIDENCE_STORE).clear();
    transaction.objectStore(FILE_STORE).clear();
    await transactionDone(transaction);
};
