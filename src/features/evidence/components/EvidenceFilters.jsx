import React from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { EVIDENCE_TYPES } from "../config";
import { Button } from "@/Components/ui/button";
import { useEvidenceLanguage } from "../EvidenceLanguageContext";

const inputClass = "h-10 rounded-md border-2 border-muted bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const defaultFilters = {
    query: "", type: "", dateFrom: "", dateTo: "", person: "", location: "", tag: "", source: "", importance: "", verification: "", sort: "newest",
};

export const filterEvidence = (records, filters) => {
    const query = filters.query.trim().toLowerCase();
    const filtered = records.filter((item) => {
        const searchable = [
            item.evidenceId, item.title, item.description, item.notes, item.location, item.source,
            item.transcript, item.messageContent, item.transactionId,
            ...(item.tags || []), ...(item.peopleInvolved || []),
        ].filter(Boolean).join(" ").toLowerCase();
        const eventDate = item.eventDate || "";
        return (!query || searchable.includes(query))
            && (!filters.type || item.type === filters.type)
            && (!filters.dateFrom || eventDate >= filters.dateFrom)
            && (!filters.dateTo || eventDate <= filters.dateTo)
            && (!filters.person || [...(item.peopleInvolved || []), item.sender, item.receiver].filter(Boolean).some((person) => person.toLowerCase().includes(filters.person.toLowerCase())))
            && (!filters.location || (item.location || "").toLowerCase().includes(filters.location.toLowerCase()))
            && (!filters.tag || (item.tags || []).some((tag) => tag.toLowerCase().includes(filters.tag.toLowerCase())))
            && (!filters.source || (item.source || "").toLowerCase().includes(filters.source.toLowerCase()))
            && (!filters.importance || item.importance === filters.importance)
            && (!filters.verification || item.verificationStatus === filters.verification);
    });

    return filtered.sort((a, b) => {
        if (filters.sort === "oldest") return new Date(a.dateAdded) - new Date(b.dateAdded);
        if (filters.sort === "eventDate") return (a.eventDate || "").localeCompare(b.eventDate || "");
        if (filters.sort === "category") return (a.category || "").localeCompare(b.category || "");
        if (filters.sort === "importance") return (b.importance || "").localeCompare(a.importance || "");
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    });
};

const EvidenceFilters = ({ filters, onChange, showAdvanced = true }) => {
    const { t, translate } = useEvidenceLanguage();
    const set = (key, value) => onChange({ ...filters, [key]: value });
    const hasFilters = Object.entries(filters).some(([key, value]) => value && !["sort"].includes(key));

    return (
        <div className="space-y-3 rounded-xl border-2 border-muted bg-card/40 p-4">
            <div className="flex flex-col gap-3 lg:flex-row">
                <label className="relative flex-1">
                    <span className="sr-only">Search evidence</span>
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                        className={`${inputClass} w-full pl-9`}
                        value={filters.query}
                        onChange={(event) => set("query", event.target.value)}
                        placeholder={t("search.placeholder", "Search evidence, people, dates, descriptions, transcripts...")}
                    />
                </label>
                <select className={inputClass} value={filters.type} onChange={(event) => set("type", event.target.value)} aria-label="Evidence type">
                    <option value="">{t("filter.allTypes", "All evidence types")}</option>
                    {EVIDENCE_TYPES.map((type) => <option key={type.value} value={type.value}>{translate(type.label)}</option>)}
                </select>
                <select className={inputClass} value={filters.sort} onChange={(event) => set("sort", event.target.value)} aria-label="Sort evidence">
                    <option value="newest">{t("filter.newest", "Newest added")}</option><option value="oldest">{t("filter.oldest", "Oldest added")}</option>
                    <option value="eventDate">{t("filter.eventDate", "Event date")}</option><option value="category">{t("filter.category", "Category")}</option><option value="importance">{t("filter.importance", "Importance")}</option>
                </select>
                {hasFilters && <Button variant="ghost" size="sm" className="h-10 gap-2" onClick={() => onChange(defaultFilters)}><X className="h-4 w-4" /> {t("action.clear", "Clear")}</Button>}
            </div>
            {showAdvanced && (
                <details>
                    <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-muted-foreground">
                        <SlidersHorizontal className="h-4 w-4" /> {t("filter.more", "More filters")}
                    </summary>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <input type="date" className={inputClass} value={filters.dateFrom} onChange={(e) => set("dateFrom", e.target.value)} aria-label="Date from" />
                        <input type="date" className={inputClass} value={filters.dateTo} onChange={(e) => set("dateTo", e.target.value)} aria-label="Date to" />
                        <input className={inputClass} value={filters.person} onChange={(e) => set("person", e.target.value)} placeholder={t("filter.person", "Person")} />
                        <input className={inputClass} value={filters.location} onChange={(e) => set("location", e.target.value)} placeholder={t("filter.location", "Location")} />
                        <input className={inputClass} value={filters.tag} onChange={(e) => set("tag", e.target.value)} placeholder={t("filter.tag", "Tag")} />
                        <input className={inputClass} value={filters.source} onChange={(e) => set("source", e.target.value)} placeholder={t("filter.source", "Source")} />
                        <select className={inputClass} value={filters.importance} onChange={(e) => set("importance", e.target.value)}><option value="">{t("filter.anyImportance", "Any importance")}</option><option value="Low">{t("filter.low", "Low")}</option><option value="Normal">{t("filter.normal", "Normal")}</option><option value="High">{t("filter.high", "High")}</option><option value="Critical">{t("filter.critical", "Critical")}</option></select>
                        <select className={inputClass} value={filters.verification} onChange={(e) => set("verification", e.target.value)}><option value="">{t("filter.anyStatus", "Any status")}</option><option value="Unreviewed">{t("filter.unreviewed", "Unreviewed")}</option><option value="Reviewed">{t("filter.reviewed", "Reviewed")}</option><option value="Verified">{t("filter.verified", "Verified")}</option></select>
                    </div>
                </details>
            )}
        </div>
    );
};

export default EvidenceFilters;
