import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { bulkCreateEvidence, createEvidence, getEvidenceFile, listEvidence } from "./localEvidenceStore";

const EvidenceContext = createContext(null);

export const EvidenceProvider = ({ children }) => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reviewMode, setReviewMode] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [selectedEvidence, setSelectedEvidence] = useState(null);

    const refresh = useCallback(async () => {
        setLoading(true);
        try {
            const data = await listEvidence();
            setRecords(data.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { refresh(); }, [refresh]);

    const addEvidence = async (values, file) => {
        const record = await createEvidence(values, file);
        setRecords((current) => [record, ...current]);
        return record;
    };

    const importEvidence = async (items) => {
        const imported = await bulkCreateEvidence(items);
        if (imported.length) setRecords((current) => [...imported, ...current]);
        return imported;
    };

    const people = useMemo(() => records.filter((item) => item.type === "person"), [records]);

    return (
        <EvidenceContext.Provider value={{
            records, people, loading, refresh, addEvidence, importEvidence, getEvidenceFile,
            reviewMode, setReviewMode, addOpen, setAddOpen,
            selectedEvidence, setSelectedEvidence,
        }}>
            {children}
        </EvidenceContext.Provider>
    );
};

export const useEvidence = () => {
    const context = useContext(EvidenceContext);
    if (!context) throw new Error("useEvidence must be used inside EvidenceProvider");
    return context;
};
