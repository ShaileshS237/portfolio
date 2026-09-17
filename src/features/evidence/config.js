export const EVIDENCE_TYPES = [
    { value: "audio", label: "Audio", code: "AUD", category: "Audio Recordings", empty: "No audio evidence added yet." },
    { value: "chat", label: "Chat / Message", code: "CHAT", category: "Chats / Messages", empty: "No chat records added yet." },
    { value: "call", label: "Call Log", code: "CALL", category: "Call Logs", empty: "No call logs added yet." },
    { value: "photo", label: "Photo / Screenshot", code: "IMG", category: "Photos / Screenshots", empty: "No media evidence added yet." },
    { value: "video", label: "Video", code: "VID", category: "Videos", empty: "No media evidence added yet." },
    { value: "travel", label: "Travel", code: "TRAVEL", category: "Travel", empty: "No travel records added yet." },
    { value: "financial", label: "Financial / Payment", code: "PAY", category: "Financial Records", empty: "No financial records added yet." },
    { value: "receipt", label: "Bill / Receipt", code: "REC", category: "Bills / Receipts", empty: "No bills or receipts added yet." },
    { value: "email", label: "Email", code: "EMAIL", category: "Emails", empty: "No emails added yet." },
    { value: "document", label: "Document", code: "DOC", category: "Documents", empty: "No documents added yet." },
    { value: "legal", label: "Legal Document", code: "LEGAL", category: "Legal Documents", empty: "No legal documents added yet." },
    { value: "timeline", label: "Timeline Event", code: "EVENT", category: "Timeline", empty: "No timeline events added yet." },
    { value: "person", label: "Person", code: "PERSON", category: "People", empty: "No people added yet." },
    { value: "location", label: "Location / Visit", code: "LOC", category: "Location / Visits", empty: "No location records added yet." },
    { value: "gift", label: "Gift / Purchase", code: "GIFT", category: "Gifts / Purchases", empty: "No gifts or purchases added yet." },
    { value: "medical", label: "Medical Record", code: "MED", category: "Medical Records", empty: "No medical records added yet." },
    { value: "meeting", label: "Family Meeting", code: "MEET", category: "Family Meetings", empty: "No family meetings added yet." },
    { value: "incident", label: "Important Incident", code: "INC", category: "Important Incidents", empty: "No incidents added yet." },
    { value: "other", label: "Other", code: "OTHER", category: "Other Evidence", empty: "No other evidence added yet." },
];

export const EVIDENCE_CATEGORIES = [
    "Timeline", "Call Logs", "Chats / Messages", "Audio Recordings", "Videos",
    "Photos / Screenshots", "Travel", "Location / Visits", "Financial Records",
    "Bank / Payment Records", "Bills / Receipts", "Gifts / Purchases", "Medical Records",
    "Emails", "Documents", "Legal Documents", "Family Meetings", "Important Incidents",
    "Witnesses / People", "Other Evidence",
];

export const TYPE_FIELDS = {
    audio: [
        ["recordingDateTime", "Recording date/time", "datetime-local"],
        ["duration", "Duration", "text", "e.g. 12:34"],
        ["participants", "Participants", "text"],
        ["transcript", "Transcript", "textarea"],
        ["importantTimestamps", "Important timestamps", "textarea", "One per line: 00:12 — Note"],
    ],
    travel: [
        ["from", "From", "text"], ["to", "To", "text"],
        ["departure", "Departure", "datetime-local"], ["arrival", "Arrival", "datetime-local"],
        ["transportType", "Transport type", "text"], ["bookingReference", "Booking reference", "text"],
    ],
    financial: [
        ["amount", "Amount", "number"], ["sender", "Sender", "text"],
        ["receiver", "Receiver", "text"], ["paymentMethod", "Payment method", "text"],
        ["transactionId", "Transaction / reference ID", "text"], ["purpose", "Purpose", "text"],
    ],
    chat: [
        ["platform", "Platform", "text"], ["sender", "Sender", "text"],
        ["receiver", "Receiver", "text"], ["messageTimestamp", "Message timestamp", "datetime-local"],
        ["messageContent", "Message content", "textarea"],
    ],
    call: [
        ["caller", "Caller", "text"], ["receiver", "Receiver", "text"],
        ["callDirection", "Direction", "select", ["Incoming", "Outgoing", "Missed"]],
        ["duration", "Duration", "text"], ["contact", "Phone / contact", "text"],
    ],
    video: [["duration", "Duration", "text"], ["importantTimestamps", "Important timestamps", "textarea"]],
    document: [["documentDate", "Document date", "date"], ["pageCount", "Page count", "number"]],
    legal: [["documentDate", "Document date", "date"], ["pageCount", "Page count", "number"]],
    email: [["sender", "Sender", "text"], ["receiver", "Receiver", "text"], ["subject", "Subject", "text"], ["messageContent", "Email content", "textarea"]],
    person: [["relationship", "Relationship / role", "text"], ["aliases", "Aliases", "text"], ["contact", "Phone / email", "text"]],
};

export const EMPTY_STATE_BY_SECTION = {
    timeline: "No timeline events added yet.", audio: "No audio evidence added yet.",
    chats: "No chat records added yet.", calls: "No call logs added yet.",
    travel: "No travel records added yet.", financial: "No financial records added yet.",
    documents: "No documents added yet.", media: "No media evidence added yet.",
    people: "No people added yet.", evidence: "No evidence added yet.",
};

export const getTypeConfig = (type) => EVIDENCE_TYPES.find((item) => item.value === type) || EVIDENCE_TYPES.at(-1);

