import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
    Archive, AudioLines, Banknote, CalendarDays, ChevronRight,
    Download, FileText, Image, Languages, LayoutDashboard, LockKeyhole,
    Menu, MessageSquare, Phone, Plane, Plus, Presentation, Search, Users, Video, X,
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
import { markdownToPlainText } from "./components/MarkdownContent";
import { EvidenceLanguageProvider, useEvidenceLanguage } from "./EvidenceLanguageContext";
import { parseWhatsAppExport } from "./whatsappChatParser";

const primaryNavItems = [
    ["Overview", "", LayoutDashboard],
    ["Timeline", "timeline", CalendarDays],
    ["All evidence", "evidence", Archive],
    ["People", "people", Users],
    ["Download", "exports", Download],
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

const RecordCard = ({ record }) => {
    const { setSelectedEvidence } = useEvidence();
    const { language, translate } = useEvidenceLanguage();
    return (
        <button className="group flex w-full items-start justify-between gap-4 rounded-xl border-2 border-muted bg-card/50 p-4 text-left transition-colors hover:bg-muted/40" onClick={() => setSelectedEvidence(record)}>
            <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-medium text-muted-foreground">{record.evidenceId}</span><span className="rounded-full bg-muted px-2 py-0.5 text-[11px]">{translate(getTypeConfig(record.type).label)}</span></div><h3 className="mt-2 truncate font-semibold">{record.title}</h3>{record.description && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{markdownToPlainText(record.description)}</p>}<div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground"><span>{formatDate(record.eventDate, language)}</span>{record.source && <span>{record.source}</span>}{record.peopleInvolved?.length > 0 && <span>{record.peopleInvolved.join(", ")}</span>}</div></div>
            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </button>
    );
};

const PageTitle = ({ title, description, action }) => <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>{action}</div>;

const Dashboard = () => {
    const { records, setAddOpen } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const typeCount = (types) => records.filter((item) => types.includes(item.type)).length;
    const dated = records.filter((item) => item.eventDate).map((item) => item.eventDate).sort();
    const evidenceRecords = records.filter((item) => item.type !== "person");
    const summaryCards = [
        [t("dashboard.timeline", "Timeline"), typeCount(["timeline"]), CalendarDays, "timeline"],
        [t("dashboard.chats", "Conversations"), typeCount(["chat", "email"]), MessageSquare, "chats"],
        [t("dashboard.travel", "Travel"), typeCount(["travel"]), Plane, "travel"],
        [t("nav.people", "People"), typeCount(["person"]), Users, "people"],
    ].filter(([, value]) => value > 0);
    const submitSearch = (event) => { event.preventDefault(); navigate(`/personal-space/evidence/evidence?q=${encodeURIComponent(query)}`); };

    return <div className="space-y-7">
        <PageTitle title={t("dashboard.title", "Evidence overview")} description={t("dashboard.description", "Search, browse by date, or open a category below.")} />

        <section className="rounded-2xl border-2 border-muted bg-card/50 p-5 sm:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div><p className="text-sm font-medium text-muted-foreground">{language === "mr" ? "तुमचे कार्यक्षेत्र" : "Your workspace"}</p><p className="mt-2 text-4xl font-bold tracking-tight">{evidenceRecords.length}</p><p className="mt-1 text-sm text-muted-foreground">{language === "mr" ? "पुरावा नोंदी पाहण्यासाठी तयार आहेत" : "evidence records ready to review"}</p>{dated.length > 0 && <p className="mt-3 text-xs text-muted-foreground">{formatDate(dated[0], language)} — {formatDate(dated.at(-1), language)}</p>}</div>
                <div className="flex flex-col gap-2 sm:flex-row"><Button variant="outline" onClick={() => navigate("/personal-space/evidence/timeline")}><CalendarDays className="mr-2 h-4 w-4" />{language === "mr" ? "दिनांकानुसार पहा" : "Browse by date"}</Button><Button onClick={() => setAddOpen(true)}><Plus className="mr-2 h-4 w-4" />{t("action.add", "Add Evidence")}</Button></div>
            </div>
        </section>

        <form className="relative" onSubmit={submitSearch}><Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" /><input className="h-12 w-full rounded-xl border-2 border-muted bg-card pl-12 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={language === "mr" ? "नाव, दिनांक किंवा शब्द शोधा..." : "Search by name, date, or keyword..."} /></form>

        {summaryCards.length > 0 && <section className="space-y-3"><h2 className="text-base font-semibold">{language === "mr" ? "रेकॉर्ड प्रकार" : "Browse records"}</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{summaryCards.map(([label, value, Icon, path]) => <button key={path} onClick={() => navigate(`/personal-space/evidence/${path}`)} className="group flex items-center gap-4 rounded-xl border-2 border-muted bg-card/40 p-4 text-left transition-colors hover:bg-muted/40"><div className="rounded-lg bg-muted p-2.5"><Icon className="h-5 w-5" /></div><div><p className="font-semibold">{label}</p><p className="text-sm text-muted-foreground">{value} {language === "mr" ? "नोंदी" : value === 1 ? "record" : "records"}</p></div><ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" /></button>)}</div></section>}

        <section className="space-y-4"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{t("dashboard.recent", "Records to review")}</h2>{evidenceRecords.length > 0 && <Button variant="ghost" size="sm" onClick={() => navigate("/personal-space/evidence/evidence")}>{t("dashboard.viewAll", "See all")}</Button>}</div>{evidenceRecords.length === 0 ? <EmptyState message="No evidence added yet." /> : <div className="grid gap-3 lg:grid-cols-2">{evidenceRecords.slice(0, 4).map((record) => <RecordCard key={record.id} record={record} />)}</div>}</section>
    </div>;
};

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
    const [view, setView] = useState("Full chronology");
    const dated = useMemo(() => records.filter((item) => item.eventDate).sort((a, b) => `${a.eventDate} ${a.eventTime || ""}`.localeCompare(`${b.eventDate} ${b.eventTime || ""}`)), [records]);
    const grouped = useMemo(() => dated.reduce((groups, item) => { const key = view === "Year" ? item.eventDate.slice(0, 4) : view === "Month" ? item.eventDate.slice(0, 7) : item.eventDate; (groups[key] ||= []).push(item); return groups; }, {}), [dated, view]);
    const viewLabels = { Day: t("timeline.day", "Day"), Month: t("timeline.month", "Month"), Year: t("timeline.year", "Year"), "Full chronology": t("timeline.full", "Full chronology") };
    return <div className="space-y-6"><PageTitle title={t("timeline.title", "Master timeline")} description={t("timeline.description", "Chronological context across every evidence category.")} action={<div className="flex flex-wrap gap-2">{Object.keys(viewLabels).map((item) => <Button key={item} size="sm" variant={view === item ? "default" : "outline"} onClick={() => setView(item)}>{viewLabels[item]}</Button>)}</div>} />{dated.length === 0 ? <EmptyState message={EMPTY_STATE_BY_SECTION.timeline} /> : <div className="space-y-7">{Object.entries(grouped).map(([date, items]) => <section key={date} className="relative pl-7 before:absolute before:bottom-0 before:left-[7px] before:top-7 before:w-0.5 before:bg-muted"><div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-background bg-foreground" /><h2 className="mb-3 font-semibold">{view === "Year" ? date : view === "Month" ? new Date(`${date}-01T00:00:00`).toLocaleDateString(language === "mr" ? "mr-IN" : undefined, { month: "long", year: "numeric" }) : formatDate(date, language)}</h2><div className="space-y-3">{items.map((item) => <RecordCard key={item.id} record={item} />)}</div></section>)}</div>}</div>;
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

const ChatsByPerson = () => {
    const { records, setSelectedEvidence } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const [selectedPerson, setSelectedPerson] = useState("");
    const [query, setQuery] = useState("");
    const [importedMessages, setImportedMessages] = useState([]);
    const [chatLoading, setChatLoading] = useState(true);
    const [chatError, setChatError] = useState("");
    const [messageLimit, setMessageLimit] = useState(200);
    const chats = useMemo(() => records.filter((item) => ["chat", "email"].includes(item.type)), [records]);
    const fullExportRecord = chats.find((item) => item.sourceImportId === "whatsapp-full-shailesh-nikita");
    const people = useMemo(() => {
        const names = new Set();
        chats.forEach((chat) => {
            const participants = chat.peopleInvolved?.length ? chat.peopleInvolved : [chat.sender, chat.receiver];
            participants.filter(Boolean).forEach((name) => names.add(name.trim()));
        });
        return [...names].filter(Boolean).sort((a, b) => a.localeCompare(b));
    }, [chats]);
    useEffect(() => { if (!selectedPerson && people.length) setSelectedPerson(people[0]); }, [people, selectedPerson]);
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
    useEffect(() => setMessageLimit(200), [selectedPerson, query]);
    const matchingMessages = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        if (!normalizedQuery) return importedMessages;
        return importedMessages.filter((item) => `${item.sender} ${item.message} ${item.date} ${item.time}`.toLowerCase().includes(normalizedQuery));
    }, [importedMessages, query]);
    const visibleMessages = useMemo(() => matchingMessages.slice(-messageLimit), [matchingMessages, messageLimit]);
    const hiddenMessageCount = Math.max(0, matchingMessages.length - visibleMessages.length);
    const countForPerson = (person) => importedMessages.length || chats.filter((chat) => (chat.peopleInvolved || []).some((name) => name.toLowerCase() === person.toLowerCase())).length;

    return <div className="space-y-6">
        <PageTitle title={t("nav.chats", "Conversations")} description={language === "mr" ? "व्यक्ती निवडा आणि संदेश चॅटप्रमाणे पहा." : "Choose a person and read the messages in a familiar chat view."} />
        {chats.length === 0 ? <EmptyState message={EMPTY_STATE_BY_SECTION.chats} /> : <>
            <div className="overflow-hidden rounded-2xl border-2 border-muted bg-card/30 md:grid md:min-h-[620px] md:grid-cols-[260px_minmax(0,1fr)]">
                <aside className="border-b-2 border-muted p-3 md:border-b-0 md:border-r-2">
                    <p className="px-2 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{language === "mr" ? "व्यक्ती" : "People"}</p>
                    <div className="flex gap-2 overflow-x-auto pb-1 md:block md:space-y-1 md:overflow-visible">{people.map((person) => <button key={person} onClick={() => { setSelectedPerson(person); setQuery(""); }} className={`flex min-w-[210px] items-center gap-3 rounded-xl p-3 text-left transition-colors md:w-full md:min-w-0 ${selectedPerson === person ? "bg-muted" : "hover:bg-muted/50"}`}><div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${selectedPerson === person ? "bg-foreground text-background" : "bg-muted"}`}>{person.charAt(0).toUpperCase()}</div><div className="min-w-0"><p className="truncate text-sm font-semibold">{person}</p><p className="text-xs text-muted-foreground">{countForPerson(person)} {language === "mr" ? "चॅट नोंदी" : countForPerson(person) === 1 ? "chat record" : "chat records"}</p></div></button>)}</div>
                </aside>

                <section className="flex min-h-[520px] min-w-0 flex-col">
                    <header className="flex items-center gap-3 border-b-2 border-muted bg-background/70 p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">{selectedPerson.charAt(0).toUpperCase()}</div><div className="min-w-0"><h2 className="truncate font-semibold">{selectedPerson}</h2><p className="text-xs text-muted-foreground">{importedMessages.length.toLocaleString()} {language === "mr" ? "संदेश" : "messages"} · 16 Nov 2023 — 30 Aug 2026</p></div>{fullExportRecord && <Button className="ml-auto shrink-0" size="sm" variant="outline" onClick={() => setSelectedEvidence(fullExportRecord)}>{language === "mr" ? "फाइल पहा" : "View file"}</Button>}</header>
                    <div className="border-b-2 border-muted p-3"><label className="relative block"><span className="sr-only">{language === "mr" ? "चॅट शोधा" : "Search conversation"}</span><Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" /><input className="h-9 w-full rounded-lg border-2 border-muted bg-background pl-9 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={language === "mr" ? "या चॅटमध्ये शोधा..." : "Search this conversation..."} /></label></div>
                    <div className="flex-1 space-y-3 overflow-y-auto bg-muted/10 p-4 sm:p-6">
                        {chatLoading ? <p className="py-12 text-center text-sm text-muted-foreground">{language === "mr" ? "चॅट लोड होत आहे..." : "Loading conversation..."}</p> : chatError ? <EmptyState message={chatError} compact /> : matchingMessages.length === 0 ? <EmptyState message={language === "mr" ? "या शोधासाठी कोणतेही संदेश सापडले नाहीत." : "No messages match this search."} compact /> : <>
                            {hiddenMessageCount > 0 && <div className="pb-3 text-center"><Button size="sm" variant="outline" onClick={() => setMessageLimit((current) => current + 200)}>{language === "mr" ? `आधीचे आणखी संदेश दाखवा (${hiddenMessageCount.toLocaleString()} बाकी)` : `Load 200 earlier messages (${hiddenMessageCount.toLocaleString()} remaining)`}</Button></div>}
                            {visibleMessages.map((item, index) => { const previous = visibleMessages[index - 1]; const showDate = !previous || previous.date !== item.date; const normalizedSender = item.sender.toLowerCase(); const normalizedPerson = selectedPerson.toLowerCase(); const fromSelectedPerson = normalizedSender && (normalizedPerson.includes(normalizedSender) || normalizedSender.includes(normalizedPerson)); return <React.Fragment key={item.id}>{showDate && <div className="flex items-center gap-3 py-3"><span className="h-px flex-1 bg-muted" /><span className="text-[11px] font-medium text-muted-foreground">{formatDate(item.date, language)}</span><span className="h-px flex-1 bg-muted" /></div>}<div className={`flex ${fromSelectedPerson ? "justify-start" : "justify-end"}`}><div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${fromSelectedPerson ? "rounded-bl-sm border-2 border-muted bg-background" : "rounded-br-sm bg-foreground text-background"}`}><p className={`mb-1 text-[11px] font-semibold ${fromSelectedPerson ? "text-muted-foreground" : "text-background/70"}`}>{item.sender}</p><p className="whitespace-pre-wrap leading-relaxed">{item.message}</p><p className={`mt-1 text-right text-[10px] ${fromSelectedPerson ? "text-muted-foreground" : "text-background/60"}`}>{item.time.slice(0, 5)}</p></div></div></React.Fragment>; })}
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

const Sidebar = ({ open, onClose }) => {
    const location = useLocation();
    const { records } = useEvidence();
    const { language, t } = useEvidenceLanguage();
    const categoryItems = categoryNavItems.map((item) => ({ item, count: records.filter((record) => sectionTypes[item[1]]?.includes(record.type)).length })).filter(({ count }) => count > 0);
    const evidenceCount = records.filter((item) => item.type !== "person").length;
    const renderLink = ([label, path, Icon], count) => {
        const href = `/personal-space/evidence${path ? `/${path}` : ""}`;
        const active = location.pathname === href;
        return <Link key={label} to={href} onClick={onClose} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"}`}><Icon className="h-4 w-4" /><span>{t(`nav.${path || "overview"}`, label)}</span>{count !== undefined && <span className="ml-auto text-xs tabular-nums text-muted-foreground">{count}</span>}</Link>;
    };

    return <><div className={`fixed inset-0 z-50 bg-black/50 lg:hidden ${open ? "block" : "hidden"}`} onClick={onClose} /><aside className={`fixed bottom-0 left-0 top-16 z-[60] flex w-64 flex-col border-r-2 border-muted bg-background p-4 transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}><div className="mb-4 flex items-center justify-between px-2 lg:hidden"><span className="font-semibold">{t("workspace.title", "Evidence Viewer")}</span><Button variant="ghost" size="icon" onClick={onClose}><X className="h-4 w-4" /></Button></div><div className="min-h-0 flex-1 overflow-y-auto"><p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{language === "mr" ? "मुख्य" : "Main"}</p><nav className="space-y-1">{primaryNavItems.map((item) => renderLink(item))}</nav>{categoryItems.length > 0 && <><p className="mb-2 mt-6 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{language === "mr" ? "प्रकारानुसार" : "By type"}</p><nav className="space-y-1">{categoryItems.map(({ item, count }) => renderLink(item, count))}</nav></>}</div><div className="mt-4 border-t-2 border-muted px-3 pt-4 text-xs leading-5 text-muted-foreground"><div className="flex items-center gap-2 font-medium text-foreground"><LockKeyhole className="h-3.5 w-3.5" />{evidenceCount} {language === "mr" ? "पुरावा नोंदी" : "evidence records"}</div><p className="mt-1">{language === "mr" ? "नवीन नोंदी या डिव्हाइसवर जतन होतात." : "New records stay on this device."}</p></div></aside></>;
};

const WorkspaceShell = () => {
    const { reviewMode, setReviewMode, setAddOpen } = useEvidence();
    const { language, setLanguage, t } = useEvidenceLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => { const robots = document.querySelector('meta[name="robots"]') || document.head.appendChild(Object.assign(document.createElement("meta"), { name: "robots" })); const previous = robots.content; robots.content = "noindex, nofollow, noarchive"; return () => { robots.content = previous; }; }, []);
    return <PageContainer title={language === "mr" ? "पुरावा दर्शक" : "Proof / Evidence Viewer"}>
        <Navbar backTo="/personal-space" backText="Back to Personal Space" title={language === "mr" ? "पुरावा दर्शक" : "Proof / Evidence Viewer"} />
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="min-h-screen pt-16 lg:pl-64">
            <header className="sticky top-16 z-30 flex h-14 items-center justify-between border-b-2 border-muted bg-background/90 px-4 backdrop-blur md:px-6">
                <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu className="h-5 w-5" /></Button><p className="text-sm font-semibold">{reviewMode ? t("workspace.review", "Presentation view") : t("workspace.active", "Evidence workspace")}</p></div>
                <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="gap-2" onClick={() => setLanguage(language === "en" ? "mr" : "en")} aria-label={language === "en" ? "मराठी भाषा निवडा" : "Switch to English"}><Languages className="h-4 w-4" /><span className="hidden sm:inline">{language === "en" ? "मराठी" : "English"}</span></Button>
                    <Button size="sm" variant={reviewMode ? "default" : "outline"} className="gap-2" onClick={() => setReviewMode(!reviewMode)}><Presentation className="h-4 w-4" /><span className="hidden md:inline">{reviewMode ? t("action.exitReview", "Exit presentation") : t("action.review", "Presentation")}</span></Button>
                    {!reviewMode && <Button size="sm" className="gap-2" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /><span className="hidden sm:inline">{t("action.add", "Add Evidence")}</span></Button>}
                </div>
            </header>
            <main className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8"><Routes><Route index element={<Dashboard />} /><Route path="timeline" element={<Timeline />} /><Route path="evidence" element={<EvidenceIndex />} />{Object.keys(sectionTypes).filter((key) => !["people", "chats"].includes(key)).map((section) => <Route key={section} path={section} element={<SectionPage section={section} />} />)}<Route path="chats" element={<ChatsByPerson />} /><Route path="people" element={<People />} /><Route path="exports" element={<Exports />} /><Route path="*" element={<Navigate to="/personal-space/evidence" replace />} /></Routes></main>
        </div>
        <AddEvidenceDialog />
        <EvidenceDetailDrawer />
    </PageContainer>;
};

const LockedEvidence = () => <PageContainer title="Proof / Evidence Viewer"><Navbar title="Proof / Evidence Viewer" /><main className="container mx-auto flex min-h-screen max-w-lg items-center px-4 pt-16"><Card className="w-full border-2 border-muted shadow-none"><CardContent className="p-8 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted"><LockKeyhole className="h-5 w-5" /></div><h1 className="mt-5 text-xl font-semibold">Personal Space is locked</h1><p className="mt-2 text-sm text-muted-foreground">Unlock Personal Space before opening the Evidence Viewer.</p><Button asChild className="mt-6"><Link to="/personal-space">Go to Personal Space</Link></Button></CardContent></Card></main></PageContainer>;

const EvidenceWorkspace = () => sessionStorage.getItem("personal-space-access") === "granted" ? <EvidenceLanguageProvider><EvidenceProvider><WorkspaceShell /></EvidenceProvider></EvidenceLanguageProvider> : <LockedEvidence />;

export default EvidenceWorkspace;
