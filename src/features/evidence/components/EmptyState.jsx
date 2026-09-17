import React from "react";
import { FolderOpen, Plus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useEvidence } from "../EvidenceContext";
import { useEvidenceLanguage } from "../EvidenceLanguageContext";

const EmptyState = ({ message = "No evidence added yet.", compact = false }) => {
    const { reviewMode, setAddOpen } = useEvidence();
    const { t, translate } = useEvidenceLanguage();

    return (
        <div className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted text-center ${compact ? "px-5 py-10" : "min-h-72 px-6 py-14"}`}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <FolderOpen className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <h3 className="font-medium">{translate(message)}</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                {t("empty.local", "Items you add will appear here and remain stored only in this browser.")}
            </p>
            {!reviewMode && (
                <Button className="mt-5 gap-2" size="sm" onClick={() => setAddOpen(true)}>
                    <Plus className="h-4 w-4" /> {t("action.add", "Add Evidence")}
                </Button>
            )}
        </div>
    );
};

export default EmptyState;
