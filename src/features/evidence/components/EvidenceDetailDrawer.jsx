import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, Pause, Play, RotateCcw, RotateCw, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useEvidence } from "../EvidenceContext";
import { getTypeConfig } from "../config";
import { useEvidenceLanguage } from "../EvidenceLanguageContext";
import MarkdownContent from "./MarkdownContent";

const formatBytes = (bytes = 0) => {
    if (!bytes) return "—";
    const units = ["B", "KB", "MB", "GB"];
    const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    return `${(bytes / (1024 ** index)).toFixed(index ? 1 : 0)} ${units[index]}`;
};

const parseTime = (value) => {
    const parts = value.split(":").map(Number);
    if (parts.some(Number.isNaN)) return 0;
    return parts.reduce((total, part) => total * 60 + part, 0);
};

const MediaViewer = ({ record, fileUrl }) => {
    const { language, t } = useEvidenceLanguage();
    const mediaRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const timestamps = (record.importantTimestamps || "").split("\n").filter(Boolean);
    const transcriptLines = (record.transcript || "").split("\n").filter(Boolean);
    const seek = (seconds) => { if (mediaRef.current) mediaRef.current.currentTime = Math.max(0, mediaRef.current.currentTime + seconds); };
    const seekToLine = (line) => {
        const match = line.match(/\[?(\d{1,2}:\d{2}(?::\d{2})?)\]?/);
        if (match && mediaRef.current) { mediaRef.current.currentTime = parseTime(match[1]); mediaRef.current.play(); }
    };

    if (!fileUrl) return <div className="rounded-xl border-2 border-dashed border-muted p-8 text-center text-sm text-muted-foreground">{t("detail.noAttachment", "No attachment added.")}</div>;
    if (record.type === "photo") return <img src={fileUrl} alt={record.title} className="max-h-[55vh] w-full rounded-xl bg-muted object-contain" />;
    if (record.type === "video") return <video ref={mediaRef} src={fileUrl} controls className="max-h-[55vh] w-full rounded-xl bg-black" />;
    if (["document", "legal", "receipt"].includes(record.type) && record.fileType === "application/pdf") return <iframe title={record.title} src={fileUrl} className="h-[55vh] w-full rounded-xl border-2 border-muted" />;
    if (record.type !== "audio") return <a href={fileUrl} download={record.originalFilename} className="flex items-center justify-center gap-2 rounded-xl border-2 border-muted p-8 text-sm font-medium hover:bg-muted/50"><Download className="h-4 w-4" /> {language === "mr" ? "संलग्नक डाउनलोड करा" : "Download attachment"}</a>;

    return (
        <div className="space-y-4">
            <audio ref={mediaRef} src={fileUrl} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} controls className="w-full" />
            <div className="flex flex-wrap items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => seek(-10)}><RotateCcw className="mr-2 h-4 w-4" />10s</Button>
                <Button size="sm" onClick={() => playing ? mediaRef.current?.pause() : mediaRef.current?.play()}>{playing ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}{playing ? (language === "mr" ? "थांबवा" : "Pause") : (language === "mr" ? "चालू करा" : "Play")}</Button>
                <Button size="sm" variant="outline" onClick={() => seek(10)}><RotateCw className="mr-2 h-4 w-4" />10s</Button>
                <select className="h-9 rounded-md border-2 border-muted bg-background px-2 text-sm" defaultValue="1" onChange={(e) => { if (mediaRef.current) mediaRef.current.playbackRate = Number(e.target.value); }} aria-label="Playback speed"><option value="0.75">0.75×</option><option value="1">1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option></select>
            </div>
            {timestamps.length > 0 && <div className="space-y-2"><h4 className="text-sm font-semibold">{language === "mr" ? "महत्त्वाच्या वेळखुणा" : "Important timestamps"}</h4>{timestamps.map((line) => <button key={line} className="block w-full rounded-lg bg-muted/50 p-3 text-left text-sm hover:bg-muted" onClick={() => seekToLine(line)}>{line}</button>)}</div>}
            {transcriptLines.length > 0 && <div className="space-y-2"><h4 className="text-sm font-semibold">{language === "mr" ? "प्रतिलेख" : "Transcript"}</h4><div className="max-h-64 space-y-1 overflow-y-auto rounded-xl border-2 border-muted p-3">{transcriptLines.map((line, index) => <button key={`${line}-${index}`} className="block w-full rounded p-2 text-left text-sm hover:bg-muted" onClick={() => seekToLine(line)}>{line}</button>)}</div></div>}
        </div>
    );
};

const EvidenceDetailDrawer = () => {
    const { selectedEvidence: record, setSelectedEvidence, records, getEvidenceFile } = useEvidence();
    const { language, t, translate } = useEvidenceLanguage();
    const [fileUrl, setFileUrl] = useState("");
    const chronology = useMemo(() => [...records].filter((item) => item.eventDate).sort((a, b) => `${a.eventDate} ${a.eventTime || ""}`.localeCompare(`${b.eventDate} ${b.eventTime || ""}`)), [records]);
    const currentIndex = chronology.findIndex((item) => item.id === record?.id);
    const related = record ? records.filter((item) => (record.relatedEvidenceIds || []).includes(item.id) || (item.relatedEvidenceIds || []).includes(record.id)) : [];

    useEffect(() => {
        let url = "";
        if (record?.publicAttachmentPath) setFileUrl(record.publicAttachmentPath);
        else if (record?.hasAttachment) getEvidenceFile(record.id).then((file) => { if (file?.blob) { url = URL.createObjectURL(file.blob); setFileUrl(url); } });
        else setFileUrl("");
        return () => { if (url) URL.revokeObjectURL(url); };
    }, [record, getEvidenceFile]);

    if (!record) return null;
    const metadata = [
        [language === "mr" ? "पुरावा आयडी" : "Evidence ID", record.evidenceId], [t("field.category", "Category"), translate(record.category)], [t("field.subcategory", "Subcategory"), record.subcategory],
        [t("field.eventDate", "Event date"), record.eventDate], [t("field.eventTime", "Event time"), record.eventTime], [language === "mr" ? "व्यक्ती" : "People", (record.peopleInvolved || []).join(", ")],
        [t("field.location", "Location"), record.location], [t("field.source", "Source"), record.source], [language === "mr" ? "स्थिती" : "Status", record.verificationStatus],
        [language === "mr" ? "मूळ फाइलनाव" : "Original filename", record.originalFilename], [language === "mr" ? "फाइल आकार" : "File size", formatBytes(record.fileSize)],
        [language === "mr" ? "जोडले" : "Added", new Date(record.dateAdded).toLocaleString(language === "mr" ? "mr-IN" : undefined)],
    ].filter(([, value]) => value);

    return (
        <div className="fixed inset-0 z-[90] flex justify-end bg-black/55 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={record.title}>
            <div className="h-full w-full overflow-y-auto border-l-2 border-muted bg-background sm:max-w-2xl">
                <header className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-muted bg-background/95 px-5 py-4 backdrop-blur">
                    <div className="min-w-0"><p className="text-xs font-medium text-muted-foreground">{record.evidenceId} · {getTypeConfig(record.type).label}</p><h2 className="truncate text-lg font-semibold">{record.title}</h2></div>
                    <Button size="icon" variant="ghost" onClick={() => setSelectedEvidence(null)} aria-label="Close evidence"><X className="h-4 w-4" /></Button>
                </header>
                <div className="space-y-7 p-5">
                    <MediaViewer record={record} fileUrl={fileUrl} />
                    {(record.description || record.notes) && <section className="space-y-3"><h3 className="font-semibold">{t("detail.description", "Description & notes")}</h3>{record.description && <MarkdownContent className="text-sm">{record.description}</MarkdownContent>}{record.notes && <div className="rounded-lg bg-muted/50 p-3 text-sm"><p className="mb-2 font-medium">{t("detail.userNote", "User note")}:</p><MarkdownContent>{record.notes}</MarkdownContent></div>}</section>}
                    {record.type === "chat" && record.messageContent && <section><h3 className="mb-3 font-semibold">{language === "mr" ? "संदेश संदर्भ" : "Message context"}</h3><div className="rounded-xl border-2 border-muted p-4"><p className="text-xs text-muted-foreground">{record.sender} → {record.receiver} · {record.messageTimestamp}</p><MarkdownContent className="mt-2 text-sm">{record.messageContent}</MarkdownContent><Button variant="outline" size="sm" className="mt-4 gap-2"><ExternalLink className="h-4 w-4" /> {t("detail.showContext", "Show context")}</Button></div></section>}
                    <section><h3 className="mb-3 font-semibold">{t("detail.metadata", "Metadata")}</h3><dl className="grid gap-x-5 gap-y-3 rounded-xl border-2 border-muted p-4 sm:grid-cols-2">{metadata.map(([label, value]) => <div key={label}><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 break-words text-sm font-medium">{value}</dd></div>)}</dl></section>
                    <section><h3 className="mb-3 font-semibold">{t("detail.related", "Related Evidence")}</h3>{related.length ? <div className="space-y-2">{related.map((item) => <button key={item.id} className="flex w-full items-center justify-between rounded-lg border-2 border-muted p-3 text-left hover:bg-muted/50" onClick={() => setSelectedEvidence(item)}><span><span className="block text-xs text-muted-foreground">{item.evidenceId}</span><span className="text-sm font-medium">{item.title}</span></span><ChevronRight className="h-4 w-4" /></button>)}</div> : <p className="text-sm text-muted-foreground">{t("detail.noRelated", "No related evidence linked.")}</p>}</section>
                    <section className="flex items-center justify-between border-t-2 border-muted pt-5"><Button variant="outline" size="sm" disabled={currentIndex <= 0} onClick={() => setSelectedEvidence(chronology[currentIndex - 1])}><ChevronLeft className="mr-2 h-4 w-4" />{t("detail.previousEvent", "Previous Event")}</Button><Button variant="outline" size="sm" disabled={currentIndex < 0 || currentIndex >= chronology.length - 1} onClick={() => setSelectedEvidence(chronology[currentIndex + 1])}>{t("detail.nextEvent", "Next Event")}<ChevronRight className="ml-2 h-4 w-4" /></Button></section>
                </div>
            </div>
        </div>
    );
};

export default EvidenceDetailDrawer;
