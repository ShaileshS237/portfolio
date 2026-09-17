import React, { useMemo, useState } from "react";
import { ArrowLeft, FileUp, Plus, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { EVIDENCE_CATEGORIES, EVIDENCE_TYPES, TYPE_FIELDS, getTypeConfig } from "../config";
import { useEvidence } from "../EvidenceContext";
import { useEvidenceLanguage } from "../EvidenceLanguageContext";

const inputClass = "h-10 w-full rounded-md border-2 border-muted bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";
const textareaClass = `${inputClass} min-h-24 resize-y py-2`;
const initialValues = { title: "", category: "", subcategory: "", eventDate: "", eventTime: "", description: "", peopleInvolved: "", location: "", source: "", tags: "", notes: "", relatedEvidenceIds: [], relatedTimelineEvent: "", importance: "Normal", verificationStatus: "Unreviewed" };

const Field = ({ definition, value, onChange }) => {
    const { translate } = useEvidenceLanguage();
    const [name, label, type, extra] = definition;
    if (type === "textarea") return <label className="space-y-2 text-sm font-medium">{translate(label)}<textarea className={textareaClass} value={value || ""} onChange={(e) => onChange(name, e.target.value)} placeholder={extra || ""} /></label>;
    if (type === "select") return <label className="space-y-2 text-sm font-medium">{translate(label)}<select className={inputClass} value={value || ""} onChange={(e) => onChange(name, e.target.value)}><option value="">Select</option>{extra.map((option) => <option key={option} value={option}>{translate(option)}</option>)}</select></label>;
    return <label className="space-y-2 text-sm font-medium">{translate(label)}<input className={inputClass} type={type} step={type === "number" ? "any" : undefined} value={value || ""} onChange={(e) => onChange(name, e.target.value)} placeholder={extra || ""} /></label>;
};

const AddEvidenceDialog = () => {
    const { addOpen, setAddOpen, addEvidence, importEvidence, records } = useEvidence();
    const { language, t, translate } = useEvidenceLanguage();
    const [type, setType] = useState("");
    const [values, setValues] = useState(initialValues);
    const [file, setFile] = useState(null);
    const [bulkMode, setBulkMode] = useState(false);
    const [bulkJson, setBulkJson] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const typeConfig = useMemo(() => getTypeConfig(type), [type]);

    if (!addOpen) return null;
    const close = () => { setAddOpen(false); setType(""); setValues(initialValues); setFile(null); setBulkMode(false); setBulkJson(""); setError(""); };
    const change = (name, value) => setValues((current) => ({ ...current, [name]: value }));

    const submit = async (event) => {
        event.preventDefault();
        if (!values.title.trim()) return setError(t("add.titleRequired", "Title is required."));
        setSaving(true); setError("");
        try {
            await addEvidence({
                ...values, type, category: values.category || typeConfig.category,
                peopleInvolved: values.peopleInvolved.split(",").map((item) => item.trim()).filter(Boolean),
                tags: values.tags.split(",").map((item) => item.trim()).filter(Boolean),
            }, file);
            close();
        } catch (err) {
            setError(err.message || "Could not save this evidence item.");
        } finally { setSaving(false); }
    };

    const submitBulk = async (event) => {
        event.preventDefault();
        setSaving(true); setError("");
        try {
            const parsed = JSON.parse(bulkJson);
            if (!Array.isArray(parsed)) throw new Error("Import data must be a JSON array.");
            await importEvidence(parsed);
            close();
        } catch (err) {
            setError(err.message || "Could not import these records.");
        } finally { setSaving(false); }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={t("action.add", "Add evidence")}>
            <div className="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border-2 border-muted bg-background shadow-2xl sm:max-w-3xl sm:rounded-2xl">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-muted bg-background/95 px-5 py-4 backdrop-blur">
                    <div className="flex items-center gap-3">
                        {(type || bulkMode) && <Button variant="ghost" size="icon" onClick={() => { setType(""); setBulkMode(false); setError(""); }} aria-label="Back to evidence types"><ArrowLeft className="h-4 w-4" /></Button>}
                        <div><h2 className="font-semibold">{bulkMode ? (language === "mr" ? "JSON आयात" : "Import JSON") : type ? `${language === "mr" ? "जोडा" : "Add"} ${translate(typeConfig.label)}` : t("action.add", "Add Evidence")}</h2><p className="text-xs text-muted-foreground">{t("add.savedLocal", "Saved only in this browser")}</p></div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={close} aria-label="Close"><X className="h-4 w-4" /></Button>
                </div>

                {bulkMode ? (
                    <form onSubmit={submitBulk} className="space-y-4 p-5">
                        <p className="text-sm text-muted-foreground">Paste a JSON array of evidence records. Existing records with the same import ID are skipped.</p>
                        <label className="space-y-2 text-sm font-medium">Import data<textarea className={`${textareaClass} min-h-[50vh] font-mono text-xs`} value={bulkJson} onChange={(event) => setBulkJson(event.target.value)} placeholder='[{"type":"timeline","title":"..."}]' required /></label>
                        {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
                        <div className="flex justify-end gap-3 border-t-2 border-muted pt-5"><Button type="button" variant="outline" onClick={close}>{t("action.cancel", "Cancel")}</Button><Button type="submit" disabled={saving}>{saving ? (language === "mr" ? "आयात करत आहे…" : "Importing…") : (language === "mr" ? "नोंदी आयात करा" : "Import records")}</Button></div>
                    </form>
                ) : !type ? (
                    <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
                        {EVIDENCE_TYPES.filter((item) => ["audio", "chat", "call", "photo", "video", "travel", "financial", "receipt", "email", "document", "legal", "timeline", "person", "other"].includes(item.value)).map((item) => (
                            <button key={item.value} className="flex items-center gap-3 rounded-xl border-2 border-muted p-4 text-left transition-colors hover:bg-muted/50" onClick={() => { setType(item.value); change("category", item.category); }}>
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted"><Plus className="h-4 w-4" /></span>
                                <span><span className="block text-sm font-medium">{translate(item.label)}</span><span className="text-xs text-muted-foreground">{item.code}</span></span>
                            </button>
                        ))}
                        <button type="button" onClick={() => setBulkMode(true)} className="rounded-xl border-2 border-dashed border-muted p-4 text-left transition-colors hover:bg-muted/40 sm:col-span-2 lg:col-span-3">
                            <p className="text-sm font-medium">{t("add.bulk", "Bulk import")}</p><p className="mt-1 text-xs text-muted-foreground">{t("add.bulkNote", "Architecture reserved for WhatsApp exports, call-log CSV, bank CSV/Excel, email exports, and media folders.")}</p>
                        </button>
                    </div>
                ) : (
                    <form onSubmit={submit} className="space-y-6 p-5">
                        <section className="space-y-4"><h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{t("add.core", "Core details")}</h3><div className="grid gap-4 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium sm:col-span-2">{t("field.title", "Title")} *<input autoFocus className={inputClass} value={values.title} onChange={(e) => change("title", e.target.value)} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.category", "Category")}<select className={inputClass} value={values.category} onChange={(e) => change("category", e.target.value)}>{EVIDENCE_CATEGORIES.map((category) => <option key={category} value={category}>{translate(category)}</option>)}</select></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.subcategory", "Subcategory")}<input className={inputClass} value={values.subcategory} onChange={(e) => change("subcategory", e.target.value)} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.eventDate", "Event date")}<input className={inputClass} type="date" value={values.eventDate} onChange={(e) => change("eventDate", e.target.value)} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.eventTime", "Event time")}<input className={inputClass} type="time" value={values.eventTime} onChange={(e) => change("eventTime", e.target.value)} /></label>
                            <label className="space-y-2 text-sm font-medium sm:col-span-2">{t("field.description", "Description")}<textarea className={textareaClass} value={values.description} onChange={(e) => change("description", e.target.value)} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.people", "People involved")}<input className={inputClass} value={values.peopleInvolved} onChange={(e) => change("peopleInvolved", e.target.value)} placeholder={t("field.comma", "Comma separated")} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.location", "Location")}<input className={inputClass} value={values.location} onChange={(e) => change("location", e.target.value)} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.source", "Source")}<input className={inputClass} value={values.source} onChange={(e) => change("source", e.target.value)} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.tags", "Tags")}<input className={inputClass} value={values.tags} onChange={(e) => change("tags", e.target.value)} placeholder={t("field.comma", "Comma separated")} /></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.importance", "Importance")}<select className={inputClass} value={values.importance} onChange={(e) => change("importance", e.target.value)}><option value="Low">{t("filter.low", "Low")}</option><option value="Normal">{t("filter.normal", "Normal")}</option><option value="High">{t("filter.high", "High")}</option><option value="Critical">{t("filter.critical", "Critical")}</option></select></label>
                            <label className="space-y-2 text-sm font-medium">{t("field.verification", "Verification")}<select className={inputClass} value={values.verificationStatus} onChange={(e) => change("verificationStatus", e.target.value)}><option value="Unreviewed">{t("filter.unreviewed", "Unreviewed")}</option><option value="Reviewed">{t("filter.reviewed", "Reviewed")}</option><option value="Verified">{t("filter.verified", "Verified")}</option></select></label>
                        </div></section>

                        {(TYPE_FIELDS[type] || []).length > 0 && <section className="space-y-4"><h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{translate(typeConfig.label)} {language === "mr" ? "तपशील" : "details"}</h3><div className="grid gap-4 sm:grid-cols-2">{TYPE_FIELDS[type].map((field) => <Field key={field[0]} definition={field} value={values[field[0]]} onChange={change} />)}</div></section>}

                        <section className="space-y-4"><h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{t("add.context", "Context & attachment")}</h3><div className="grid gap-4 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium sm:col-span-2">{t("field.related", "Related evidence")}<select multiple className={`${inputClass} h-28 py-2`} value={values.relatedEvidenceIds} onChange={(e) => change("relatedEvidenceIds", Array.from(e.target.selectedOptions, (option) => option.value))}>{records.map((record) => <option key={record.id} value={record.id}>{record.evidenceId} — {record.title}</option>)}</select></label>
                            <label className="space-y-2 text-sm font-medium sm:col-span-2">{t("field.notes", "Notes")}<textarea className={textareaClass} value={values.notes} onChange={(e) => change("notes", e.target.value)} /></label>
                            <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-muted p-4 sm:col-span-2"><FileUp className="h-5 w-5 text-muted-foreground" /><span className="min-w-0"><span className="block text-sm font-medium">{file ? file.name : t("add.choose", "Choose attachment")}</span><span className="block truncate text-xs text-muted-foreground">{t("add.fileNote", "Original file is kept unchanged in local browser storage.")}</span></span><input className="sr-only" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} /></label>
                        </div></section>
                        {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
                        <div className="flex justify-end gap-3 border-t-2 border-muted pt-5"><Button type="button" variant="outline" onClick={close}>{t("action.cancel", "Cancel")}</Button><Button type="submit" disabled={saving}>{saving ? (language === "mr" ? "जतन करत आहे…" : "Saving…") : t("action.add", "Add Evidence")}</Button></div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AddEvidenceDialog;
