import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
    Archive, AudioLines, Banknote, CalendarDays, ChevronRight,
    Download, FileText, Image, Languages, LockKeyhole,
    MessageSquare, Phone, Plane, Plus, Presentation, Search, Users, Video,
} from "lucide-react";
import Navbar from "@/Components/Navbar";
import PageContainer from "@/Components/PageContainer";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { EvidenceProvider, useEvidence } from "./EvidenceContext";
import { EMPTY_STATE_BY_SECTION, getTypeConfig } from "./config";
import EmptyState from "./components/EmptyState";
import EvidenceFilters, { defaultFilters, filterEvidence } from "./components/EvidenceFilters";
import AddEvidenceDialog from "./components/AddEvidenceDialog";
import EvidenceDetailDrawer from "./components/EvidenceDetailDrawer";
import MarkdownContent, { markdownToPlainText } from "./components/MarkdownContent";
import { EvidenceLanguageProvider, useEvidenceLanguage } from "./EvidenceLanguageContext";
import { parseWhatsAppExport } from "./whatsappChatParser";

const primaryNavItems = [
    ["Timeline", "timeline", CalendarDays],
    ["All evidence", "evidence", Archive],
    ["People", "people", Users],
];

const categoryNavItems = [
    ["Chats", "chats", MessageSquare], ["Calls", "calls", Phone], ["Audio", "audio", AudioLines],
    ["Photos", "photos", Image], ["Videos", "videos", Video], ["Travel", "travel", Plane],
    ["Financial", "financial", Banknote], ["Documents", "documents", FileText],
];

const navItems = [...primaryNavItems, ...categoryNavItems];

const sectionTypes = {
    chats: ["chat", "email"], calls: ["call"], audio: ["audio"], photos: ["photo"], videos: ["video"],
    travel: ["travel"], financial: ["financial", "receipt", "gift"], documents: ["document", "legal", "medical"], people: ["person"],
};

const sectionEmptyKey = { photos: "media", videos: "media" };

const formatDate = (value, language = "en") => value ? new Date(`${value}T00:00:00`).toLocaleDateString(language === "mr" ? "mr-IN" : undefined, { day: "numeric", month: "short", year: "numeric" }) : (language === "mr" ? "दिनांक नाही" : "No date");

const RecordCard = ({ record, onOpen }) => {
    const { setSelectedEvidence } = useEvidence();
    const { language, translate } = useEvidenceLanguage();
    return (
        <button className="group flex w-full items-start justify-between gap-4 rounded-xl border-2 border-muted bg-card/50 p-4 text-left transition-colors hover:bg-muted/40" onClick={() => onOpen ? onOpen(record) : setSelectedEvidence(record)}>
            <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-medium text-muted-foreground">{record.evidenceId}</span><span className="rounded-full bg-muted px-2 py-0.5 text-[11px]">{translate(getTypeConfig(record.type).label)}</span></div><h3 className="mt-2 truncate font-semibold">{record.title}</h3>{record.description && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{markdownToPlainText(record.description)}</p>}<div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground"><span>{formatDate(record.eventDate, language)}</span>{record.source && <span>{record.source}</span>}{record.peopleInvolved?.length > 0 && <span>{record.peopleInvolved.join(", ")}</span>}</div></div>
            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </button>
    );
};

const PageTitle = ({ title, description, action }) => <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>{action}</div>;

const EvidenceIndex = () => {
    const { records, setSelectedEvidence } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const [searchParams] = useSearchParams();
    const [filters, setFilters] = useState({ ...defaultFilters, query: searchParams.get("q") || "" });
    const [page, setPage] = useState(1);
    const results = useMemo(() => filterEvidence(records.filter((item) => item.type !== "person"), filters), [records, filters]);
    const pageSize = 10; const pages = Math.max(1, Math.ceil(results.length / pageSize)); const visible = results.slice((page - 1) * pageSize, page * pageSize);
    useEffect(() => setPage(1), [filters]);
    return <div className="space-y-6"><PageTitle title={t("index.title", "Evidence index")} description={t("index.description", "Search, filter, and open every evidence item from one index.")} /><EvidenceFilters filters={filters} onChange={setFilters} />{results.length === 0 ? <EmptyState message={records.length ? (language === "mr" ? "या फिल्टरशी जुळणारा पुरावा नाही." : "No evidence matches these filters.") : EMPTY_STATE_BY_SECTION.evidence} /> : <><div className="overflow-hidden rounded-xl border-2 border-muted"><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead className="bg-muted/50 text-xs uppercase text-muted-foreground"><tr><th className="px-4 py-3">ID</th><th className="px-4 py-3">{language === "mr" ? "दिनांक" : "Date"}</th><th className="px-4 py-3">{t("field.category", "Category")}</th><th className="px-4 py-3">{t("field.title", "Title")}</th><th className="px-4 py-3">{language === "mr" ? "व्यक्ती" : "People"}</th><th className="px-4 py-3">{t("field.source", "Source")}</th><th className="px-4 py-3">{language === "mr" ? "संबंधित" : "Related"}</th></tr></thead><tbody>{visible.map((record) => <tr key={record.id} className="cursor-pointer border-t-2 border-muted hover:bg-muted/30" onClick={() => setSelectedEvidence(record)}><td className="px-4 py-3 font-medium">{record.evidenceId}</td><td className="px-4 py-3">{formatDate(record.eventDate, language)}</td><td className="px-4 py-3">{record.category}</td><td className="px-4 py-3 font-medium">{record.title}</td><td className="px-4 py-3">{record.peopleInvolved?.join(", ") || "—"}</td><td className="px-4 py-3">{record.source || "—"}</td><td className="px-4 py-3">{record.relatedEvidenceIds?.length || 0}</td></tr>)}</tbody></table></div></div><div className="flex items-center justify-between text-sm text-muted-foreground"><span>{results.length} {language === "mr" ? "नोंदी" : `item${results.length === 1 ? "" : "s"}`}</span><div className="flex items-center gap-2"><Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>{t("action.previous", "Previous")}</Button><span>{page} / {pages}</span><Button variant="outline" size="sm" disabled={page === pages} onClick={() => setPage((p) => p + 1)}>{t("action.next", "Next")}</Button></div></div></>}
    </div>;
};

const Timeline = () => {
    const { records } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const navigate = useNavigate();
    const [view, setView] = useState("Full chronology");
    const dated = useMemo(() => records.filter((item) => item.eventDate).sort((a, b) => `${a.eventDate} ${a.eventTime || ""}`.localeCompare(`${b.eventDate} ${b.eventTime || ""}`)), [records]);
    const grouped = useMemo(() => dated.reduce((groups, item) => { const key = view === "Year" ? item.eventDate.slice(0, 4) : view === "Month" ? item.eventDate.slice(0, 7) : item.eventDate; (groups[key] ||= []).push(item); return groups; }, {}), [dated, view]);
    const viewLabels = { Day: t("timeline.day", "Day"), Month: t("timeline.month", "Month"), Year: t("timeline.year", "Year"), "Full chronology": t("timeline.full", "Full chronology") };
    return <div className="space-y-6"><PageTitle title={t("timeline.title", "Master timeline")} description={t("timeline.description", "Chronological context across every evidence category.")} action={<div className="flex flex-wrap gap-2">{Object.keys(viewLabels).map((item) => <Button key={item} size="sm" variant={view === item ? "default" : "outline"} onClick={() => setView(item)}>{viewLabels[item]}</Button>)}</div>} />{dated.length === 0 ? <EmptyState message={EMPTY_STATE_BY_SECTION.timeline} /> : <div className="space-y-7">{Object.entries(grouped).map(([date, items]) => <section key={date} className="relative pl-7 before:absolute before:bottom-0 before:left-[7px] before:top-7 before:w-0.5 before:bg-muted"><div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-background bg-foreground" /><h2 className="mb-3 font-semibold">{view === "Year" ? date : view === "Month" ? new Date(`${date}-01T00:00:00`).toLocaleDateString(language === "mr" ? "mr-IN" : undefined, { month: "long", year: "numeric" }) : formatDate(date, language)}</h2><div className="space-y-3">{items.map((item) => <RecordCard key={item.id} record={item} onOpen={() => navigate(`/personal-space/evidence/timeline/${item.id}`)} />)}</div></section>)}</div>}</div>;
};

const TimelineDetail = () => {
    const { recordId } = useParams();
    const { records, loading } = useEvidence();
    const { language, t, translate } = useEvidenceLanguage();
    const navigate = useNavigate();
    const record = records.find((item) => item.id === recordId);

    if (loading) return <p className="py-12 text-center text-sm text-muted-foreground">Loading record...</p>;
    if (!record) return <EmptyState message="This timeline record could not be found." />;

    const metadata = [[t("field.eventDate", "Event date"), formatDate(record.eventDate, language)], [t("field.eventTime", "Event time"), record.eventTime], [t("field.category", "Category"), translate(record.category)], [language === "mr" ? "व्यक्ती" : "People", record.peopleInvolved?.join(", ")], [t("field.location", "Location"), record.location], [t("field.source", "Source"), record.source]].filter(([, value]) => value);
    return <div className="space-y-6"><Button variant="outline" size="sm" onClick={() => window.history.length > 1 ? window.history.back() : window.location.assign("/personal-space/evidence/timeline")}>Back to timeline</Button><PageTitle title={record.title} description={`${record.evidenceId} · ${translate(getTypeConfig(record.type).label)}`} /><div className="flex flex-wrap items-center gap-3"><h2 className="inline-flex rounded-lg border-2 border-muted bg-muted px-4 py-2 text-lg font-semibold">{formatDate(record.eventDate, language)}</h2><Button size="sm" variant="outline" onClick={() => navigate(`/personal-space/evidence/chats/all?date=${record.eventDate}`)}>{language === "mr" ? "संबंधित चॅट पहा" : "View related chat"}</Button></div>{(record.description || record.notes) && <section className="space-y-3 rounded-xl border-2 border-muted p-5"><h2 className="font-semibold">{t("detail.description", "Description & notes")}</h2>{record.description && <MarkdownContent className="text-sm">{record.description}</MarkdownContent>}{record.notes && <div className="rounded-lg bg-muted/50 p-3 text-sm"><MarkdownContent>{record.notes}</MarkdownContent></div>}</section>}<section className="rounded-xl border-2 border-muted p-5"><h2 className="mb-4 font-semibold">{t("detail.metadata", "Metadata")}</h2><dl className="grid gap-x-5 gap-y-4 sm:grid-cols-2">{metadata.map(([label, value]) => <div key={label}><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 text-sm font-medium">{value}</dd></div>)}</dl></section></div>;
};

const SectionPage = ({ section }) => {
    const { records } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const [filters, setFilters] = useState(defaultFilters);
    const types = sectionTypes[section] || [];
    const sectionRecords = useMemo(() => filterEvidence(records.filter((item) => types.includes(item.type)), filters), [records, types, filters]);
    const label = navItems.find((item) => item[1] === section)?.[0] || section;
    const translatedLabel = t(`nav.${section}`, label);
    return <div className="space-y-6"><PageTitle title={translatedLabel} description={language === "mr" ? `${translatedLabel} आणि संबंधित संदर्भाचे पुनरावलोकन करा.` : `Review ${label.toLowerCase()} and connected context.`} /><EvidenceFilters filters={{ ...filters, type: "" }} onChange={(next) => setFilters({ ...next, type: "" })} />{sectionRecords.length === 0 ? <EmptyState message={EMPTY_STATE_BY_SECTION[sectionEmptyKey[section] || section] || `No ${label.toLowerCase()} added yet.`} /> : <div className="grid gap-3 lg:grid-cols-2">{sectionRecords.map((record) => <RecordCard key={record.id} record={record} />)}</div>}</div>;
};

const ChatsByPerson = ({ loadAll = false }) => {
    const { records, setSelectedEvidence } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState("");
    const [importedMessages, setImportedMessages] = useState([]);
    const [chatLoading, setChatLoading] = useState(true);
    const [chatError, setChatError] = useState("");
    const [messageLimit, setMessageLimit] = useState(1000);
    const chatScrollRef = useRef(null);
    const targetDateRef = useRef(null);
    const targetDate = searchParams.get("date");
    const chats = useMemo(() => records.filter((item) => ["chat", "email"].includes(item.type)), [records]);
    const fullExportRecord = chats.find((item) => item.sourceImportId === "whatsapp-full-shailesh-nikita");
    useEffect(() => {
        let active = true;
        setChatLoading(true);
        fetch("/data/shailesh-nikita-whatsapp.txt")
            .then((response) => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.text(); })
            .then((text) => { if (active) setImportedMessages(parseWhatsAppExport(text)); })
            .catch(() => { if (active) setChatError(language === "mr" ? "चॅट फाइल लोड झाली नाही." : "The chat file could not be loaded."); })
            .finally(() => { if (active) setChatLoading(false); });
        return () => { active = false; };
    }, [language]);
    const matchingMessages = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        if (!normalizedQuery) return importedMessages;
        return importedMessages.filter((item) => `${item.sender} ${item.message} ${item.date} ${item.time}`.toLowerCase().includes(normalizedQuery));
    }, [importedMessages, query]);
    const visibleMessages = useMemo(() => loadAll || targetDate ? matchingMessages : matchingMessages.slice(-messageLimit), [loadAll, matchingMessages, messageLimit, targetDate]);
    const hiddenMessageCount = Math.max(0, matchingMessages.length - visibleMessages.length);
    useEffect(() => setMessageLimit(1000), [query]);
    useEffect(() => { if (targetDateRef.current) targetDateRef.current.scrollIntoView({ block: "center" }); else if (chatScrollRef.current) chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight; }, [importedMessages, query, targetDate]);

    return <div className="space-y-6">
        <PageTitle title={t("nav.chats", "Conversations")} description={language === "mr" ? "व्यक्ती निवडा आणि संदेश चॅटप्रमाणे पहा." : "Choose a person and read the messages in a familiar chat view."} />
        {chats.length === 0 ? <EmptyState message={EMPTY_STATE_BY_SECTION.chats} /> : <>
            <div className="overflow-hidden rounded-2xl border-2 border-muted bg-card/30 md:h-[calc(100vh-18rem)]">
                <section className="flex min-h-[520px] min-w-0 flex-col md:h-full md:min-h-0">
                    <header className="flex items-center gap-3 border-b-2 border-muted bg-background/70 p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">N</div><div className="min-w-0"><h2 className="truncate font-semibold">Nikita - Shailesh</h2><p className="text-xs text-muted-foreground">{importedMessages.length.toLocaleString()} {language === "mr" ? "संदेश" : "messages"} · 16 Nov 2023 — 30 Aug 2026</p></div>{!loadAll && fullExportRecord && <Button className="ml-auto shrink-0" size="sm" variant="outline" onClick={() => navigate("/personal-space/evidence/chats/all")}>{language === "mr" ? "सर्व संदेश पहा" : "View all"}</Button>}</header>
                    <div className="border-b-2 border-muted p-3"><label className="relative block"><span className="sr-only">{language === "mr" ? "चॅट शोधा" : "Search conversation"}</span><Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" /><input className="h-9 w-full rounded-lg border-2 border-muted bg-background pl-9 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={language === "mr" ? "या चॅटमध्ये शोधा..." : "Search this conversation..."} /></label></div>
                    <div ref={chatScrollRef} className="flex-1 space-y-3 overflow-y-auto bg-muted/10 p-4 sm:p-6">
                        {chatLoading ? <p className="py-12 text-center text-sm text-muted-foreground">{language === "mr" ? "चॅट लोड होत आहे..." : "Loading conversation..."}</p> : chatError ? <EmptyState message={chatError} compact /> : matchingMessages.length === 0 ? <EmptyState message={language === "mr" ? "या शोधासाठी कोणतेही संदेश सापडले नाहीत." : "No messages match this search."} compact /> : <>
                            {!loadAll && hiddenMessageCount > 0 && <div className="pb-3 text-center"><Button size="sm" variant="outline" onClick={() => setMessageLimit((current) => current + 1000)}>{language === "mr" ? `आधीचे १,००० संदेश लोड करा (${hiddenMessageCount.toLocaleString()} बाकी)` : `Load 1,000 earlier messages (${hiddenMessageCount.toLocaleString()} remaining)`}</Button></div>}
                            {visibleMessages.map((item, index) => { const previous = visibleMessages[index - 1]; const showDate = !previous || previous.date !== item.date; const isTargetDate = item.date === targetDate; const fromNikita = item.sender.toLowerCase().includes("nikita"); return <React.Fragment key={item.id}>{showDate && <div ref={isTargetDate ? targetDateRef : null} className="flex items-center gap-3 py-3"><span className="h-px flex-1 bg-muted" /><span className={`rounded px-2 py-1 text-[11px] font-medium ${isTargetDate ? "bg-yellow-300 text-black" : "text-muted-foreground"}`}>{formatDate(item.date, language)}</span><span className="h-px flex-1 bg-muted" /></div>}<div className={`flex ${fromNikita ? "justify-start" : "justify-end"}`}><div className={`max-w-[82%] ${fromNikita ? "text-left" : "text-right"}`}><p className="mb-1 px-1 text-[10px] font-semibold text-muted-foreground">{item.sender}</p><div className={`inline-block rounded-[20px] px-4 py-2.5 text-left text-sm ${fromNikita ? "rounded-bl-md bg-muted text-foreground" : "rounded-br-md bg-sky-500 text-white"} ${isTargetDate ? "ring-2 ring-yellow-300 ring-offset-2 ring-offset-background" : ""}`}><p className="whitespace-pre-wrap leading-relaxed">{item.message}</p></div><p className="mt-1 px-1 text-[10px] text-muted-foreground">{item.time.slice(0, 5)}</p></div></div></React.Fragment>; })}
                        </>}
                    </div>
                </section>
            </div>
        </>}
    </div>;
};

const People = () => {
    const { people, records, setSelectedEvidence } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    return <div className="space-y-6"><PageTitle title={t("people.title", "People")} description={t("people.description", "People are shown only from records you intentionally add.")} />{people.length === 0 ? <EmptyState message={EMPTY_STATE_BY_SECTION.people} /> : <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{people.map((person) => { const connected = records.filter((item) => item.peopleInvolved?.some((name) => name.toLowerCase() === person.title.toLowerCase())); return <Card key={person.id} className="border-2 border-muted shadow-none"><CardContent className="p-5"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted"><Users className="h-4 w-4" /></div><h3 className="mt-4 font-semibold">{person.title}</h3><p className="mt-1 text-sm text-muted-foreground">{person.relationship || (language === "mr" ? "भूमिका नमूद नाही" : "No role specified")}</p><p className="mt-4 text-xs text-muted-foreground">{connected.length} {language === "mr" ? "संबंधित नोंदी" : `connected record${connected.length === 1 ? "" : "s"}`}</p>{connected.slice(0, 3).map((item) => <button key={item.id} className="mt-2 block w-full rounded-lg border-2 border-muted p-2 text-left text-xs hover:bg-muted" onClick={() => setSelectedEvidence(item)}>{item.evidenceId} · {item.title}</button>)}</CardContent></Card>; })}</div>}</div>;
};

const Exports = () => {
    const { records } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const exportCsv = () => {
        const headers = ["Evidence ID", "Event Date", "Event Time", "Title", "Description", "Category", "People", "Source", "Original Filename", "Related Evidence IDs"];
        const rows = records.filter((item) => item.type !== "person").map((item) => [item.evidenceId, item.eventDate, item.eventTime, item.title, item.description, item.category, item.peopleInvolved?.join("; "), item.source, item.originalFilename, item.relatedEvidenceIds?.join("; ")]);
        const csv = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(",")).join("\n");
        const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); const link = document.createElement("a"); link.href = url; link.download = "evidence-index.csv"; link.click(); URL.revokeObjectURL(url);
    };
    const options = [["Evidence Index → CSV", "Download a structured spreadsheet-compatible index.", exportCsv], ["Evidence Index → PDF", "Open the current workspace in print view and save as PDF.", () => window.print()], ["Timeline → PDF", "Print the chronology view to PDF.", () => window.print()], ["Selected Evidence Summary → PDF", "Open an evidence record, then use your browser's print dialog.", () => window.print()]];
    const localizedOptions = language === "mr" ? [["पुरावा अनुक्रमणिका → CSV", "स्प्रेडशीटसाठी संरचित अनुक्रमणिका डाउनलोड करा.", exportCsv], ["पुरावा अनुक्रमणिका → PDF", "सध्याचे कार्यक्षेत्र प्रिंट दृश्यात उघडून PDF म्हणून जतन करा.", () => window.print()], ["कालरेषा → PDF", "कालक्रम PDF म्हणून प्रिंट करा.", () => window.print()], ["निवडलेल्या पुराव्याचा सारांश → PDF", "पुरावा नोंद उघडा आणि ब्राउझरचा प्रिंट संवाद वापरा.", () => window.print()]] : options;
    return <div className="space-y-6"><PageTitle title={t("exports.title", "Exports")} description={t("exports.description", "Create factual summaries from the included website dataset and records added locally.")} /><div className="grid gap-4 md:grid-cols-2">{localizedOptions.map(([title, description, action]) => <button key={title} onClick={action} disabled={records.length === 0} className="rounded-xl border-2 border-muted p-5 text-left transition-colors enabled:hover:bg-muted/40 disabled:cursor-not-allowed disabled:opacity-50"><Download className="h-5 w-5" /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{description}</p></button>)}</div>{records.length === 0 && <EmptyState message="No evidence available to export yet." compact />}</div>;
};

const WorkspaceNav = () => {
    const location = useLocation();
    const { records } = useEvidence();
    const { t } = useEvidenceLanguage();
    const categoryItems = categoryNavItems.map((item) => ({ item, count: records.filter((record) => sectionTypes[item[1]]?.includes(record.type)).length })).filter(({ count }) => count > 0);
    const renderCard = ([label, path, Icon], count) => {
        const href = `/personal-space/evidence${path ? `/${path}` : ""}`;
        const active = location.pathname === href;
        return <Link key={label} to={href} className={`flex items-center gap-3 rounded-xl border-2 p-3 text-sm font-medium transition-colors ${active ? "border-foreground bg-muted text-foreground" : "border-muted text-muted-foreground hover:bg-muted/50 hover:text-foreground"}`}>
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${active ? "bg-background" : "bg-muted"}`}><Icon className="h-4 w-4" /></div>
            <span className="truncate">{t(`nav.${path || "overview"}`, label)}</span>
            {count !== undefined && <span className="ml-auto text-xs tabular-nums text-muted-foreground">{count}</span>}
        </Link>;
    };

    return <div className="mb-6 flex flex-wrap gap-2">{[...primaryNavItems.map((item) => ({ item, count: undefined })), ...categoryItems].map(({ item, count }) => renderCard(item, count))}</div>;
};

const WorkspaceShell = () => {
    const { reviewMode, setReviewMode, setAddOpen } = useEvidence();
    const { language, setLanguage, t } = useEvidenceLanguage();
    useEffect(() => { const robots = document.querySelector('meta[name="robots"]') || document.head.appendChild(Object.assign(document.createElement("meta"), { name: "robots" })); const previous = robots.content; robots.content = "noindex, nofollow, noarchive"; return () => { robots.content = previous; }; }, []);
    return <PageContainer title={language === "mr" ? "पुरावा दर्शक" : "Proof / Evidence Viewer"}>
        <Navbar
            backTo="/personal-space"
            backText="Back to Personal Space"
            title={language === "mr" ? "पुरावा दर्शक" : "Proof / Evidence Viewer"}
            actions={<><Button size="sm" variant={reviewMode ? "default" : "outline"} className="gap-2" onClick={() => setReviewMode(!reviewMode)}><Presentation className="h-4 w-4" /><span className="hidden md:inline">{reviewMode ? t("action.exitReview", "Exit presentation") : t("action.review", "Presentation")}</span></Button>{!reviewMode && <Button size="sm" className="gap-2" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /><span className="hidden sm:inline">{t("action.add", "Add Evidence")}</span></Button>}<Button size="sm" variant="ghost" className="gap-2" onClick={() => setLanguage(language === "en" ? "mr" : "en")} aria-label={language === "en" ? "मराठी भाषा निवडा" : "Switch to English"}><Languages className="h-4 w-4" /><span className="hidden sm:inline">{language === "en" ? "मराठी" : "English"}</span></Button></>}
        />
        <div className={`min-h-screen pt-16 ${reviewMode ? "bg-muted/10" : ""}`}>
            <main className={`container mx-auto p-4 md:p-6 lg:p-8 ${reviewMode ? "max-w-4xl py-10 md:py-14" : "max-w-6xl"}`}>
                {!reviewMode && <WorkspaceNav />}
                <Routes><Route index element={<Navigate to="evidence" replace />} /><Route path="timeline" element={<Timeline />} /><Route path="timeline/:recordId" element={<TimelineDetail />} /><Route path="evidence" element={<EvidenceIndex />} />{Object.keys(sectionTypes).filter((key) => !["people", "chats"].includes(key)).map((section) => <Route key={section} path={section} element={<SectionPage section={section} />} />)}<Route path="chats" element={<ChatsByPerson />} /><Route path="chats/all" element={<ChatsByPerson loadAll />} /><Route path="people" element={<People />} /><Route path="*" element={<Navigate to="/personal-space/evidence" replace />} /></Routes>
            </main>
        </div>
        <AddEvidenceDialog />
        <EvidenceDetailDrawer />
    </PageContainer>;
};

const LockedEvidence = () => <PageContainer title="Proof / Evidence Viewer"><Navbar title="Proof / Evidence Viewer" /><main className="container mx-auto flex min-h-screen max-w-lg items-center px-4 pt-16"><Card className="w-full border-2 border-muted shadow-none"><CardContent className="p-8 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted"><LockKeyhole className="h-5 w-5" /></div><h1 className="mt-5 text-xl font-semibold">Personal Space is locked</h1><p className="mt-2 text-sm text-muted-foreground">Unlock Personal Space before opening the Evidence Viewer.</p><Button asChild className="mt-6"><Link to="/personal-space">Go to Personal Space</Link></Button></CardContent></Card></main></PageContainer>;

const EvidenceWorkspace = () => sessionStorage.getItem("personal-space-access") === "granted" ? <EvidenceLanguageProvider><EvidenceProvider><WorkspaceShell /></EvidenceProvider></EvidenceLanguageProvider> : <LockedEvidence />;

export default EvidenceWorkspace;
