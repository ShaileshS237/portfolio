import React, { createContext, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "evidence-workspace-language";

const mr = {
    "nav.overview": "आढावा", "nav.timeline": "कालरेषा", "nav.evidence": "पुरावे", "nav.chats": "चॅट",
    "nav.calls": "कॉल", "nav.audio": "ऑडिओ", "nav.photos": "फोटो", "nav.videos": "व्हिडिओ",
    "nav.travel": "प्रवास", "nav.financial": "आर्थिक", "nav.documents": "दस्तऐवज", "nav.people": "व्यक्ती", "nav.exports": "निर्यात",
    "workspace.title": "पुरावा दर्शक", "workspace.active": "पुरावा कार्यक्षेत्र", "workspace.review": "सादरीकरण दृश्य",
    "workspace.tagline": "तटस्थ, वस्तुनिष्ठ आणि वेबसाइटवर उपलब्ध", "workspace.local": "वेबसाइट डेटासेट",
    "workspace.localNote": "समाविष्ट नोंदी सर्वांना दिसतात; नवीन नोंदी या ब्राउझरमध्ये जतन होतात.", "action.add": "पुरावा जोडा",
    "action.review": "सादरीकरण", "action.exitReview": "सादरीकरण बंद करा", "action.close": "बंद करा",
    "action.cancel": "रद्द करा", "action.clear": "साफ करा", "action.previous": "मागील", "action.next": "पुढील",
    "dashboard.title": "पुराव्याचा आढावा", "dashboard.description": "शोधा, दिनांकानुसार पहा किंवा खालील प्रकार निवडा.",
    "dashboard.total": "एकूण पुरावा नोंदी", "dashboard.timeline": "कालरेषा घटना", "dashboard.audio": "ऑडिओ रेकॉर्डिंग",
    "dashboard.chats": "चॅट नोंदी", "dashboard.documents": "दस्तऐवज", "dashboard.photos": "फोटो",
    "dashboard.videos": "व्हिडिओ", "dashboard.financial": "आर्थिक नोंदी", "dashboard.travel": "प्रवास नोंदी",
    "dashboard.range": "पुराव्याची दिनांक श्रेणी", "dashboard.noDates": "दिनांक असलेला पुरावा नाही", "dashboard.updated": "शेवटचे अद्यतन",
    "dashboard.recent": "पुनरावलोकनासाठी नोंदी", "dashboard.viewAll": "सर्व पहा",
    "search.placeholder": "पुरावे, व्यक्ती, दिनांक, वर्णन, प्रतिलेख शोधा...", "filter.allTypes": "सर्व पुरावा प्रकार",
    "filter.newest": "नवीन जोडलेले प्रथम", "filter.oldest": "जुने जोडलेले प्रथम", "filter.eventDate": "घटनेचा दिनांक",
    "filter.category": "श्रेणी", "filter.importance": "महत्त्व", "filter.more": "अधिक फिल्टर", "filter.person": "व्यक्ती",
    "filter.location": "स्थान", "filter.tag": "टॅग", "filter.source": "स्रोत", "filter.anyImportance": "कोणतेही महत्त्व",
    "filter.anyStatus": "कोणतीही स्थिती", "filter.low": "कमी", "filter.normal": "सामान्य", "filter.high": "उच्च",
    "filter.critical": "अत्यंत महत्त्वाचे", "filter.unreviewed": "पुनरावलोकन बाकी", "filter.reviewed": "पुनरावलोकित", "filter.verified": "सत्यापित",
    "index.title": "पुरावा अनुक्रमणिका", "index.description": "सर्व पुरावे एकाच ठिकाणी शोधा, फिल्टर करा आणि उघडा.",
    "timeline.title": "मुख्य कालरेषा", "timeline.description": "सर्व पुरावा श्रेणींमधील कालानुक्रमिक संदर्भ.",
    "timeline.day": "दिवस", "timeline.month": "महिना", "timeline.year": "वर्ष", "timeline.full": "संपूर्ण कालक्रम",
    "people.title": "व्यक्ती", "people.description": "फक्त तुम्ही जाणीवपूर्वक जोडलेल्या नोंदींमधील व्यक्ती येथे दिसतात.",
    "exports.title": "निर्यात", "exports.description": "समाविष्ट वेबसाइट डेटासेट आणि स्थानिकरित्या जोडलेल्या नोंदींमधून वस्तुनिष्ठ सारांश तयार करा.",
    "empty.local": "तुम्ही जोडलेल्या नोंदी येथे दिसतील आणि फक्त या ब्राउझरमध्ये संग्रहित राहतील.",
    "add.savedLocal": "फक्त या ब्राउझरमध्ये जतन केले जाते", "add.core": "मूलभूत तपशील", "add.context": "संदर्भ आणि संलग्नक",
    "add.bulk": "मोठ्या प्रमाणात आयात", "add.bulkNote": "WhatsApp निर्यात, कॉल-लॉग CSV, बँक CSV/Excel, ईमेल निर्यात आणि मीडिया फोल्डरसाठी रचना राखीव आहे.",
    "add.titleRequired": "शीर्षक आवश्यक आहे.", "add.choose": "संलग्नक निवडा", "add.fileNote": "मूळ फाइल स्थानिक ब्राउझर संग्रहात अपरिवर्तित ठेवली जाते.",
    "field.title": "शीर्षक", "field.category": "श्रेणी", "field.subcategory": "उपश्रेणी", "field.eventDate": "घटनेचा दिनांक",
    "field.eventTime": "घटनेची वेळ", "field.description": "वर्णन", "field.people": "संबंधित व्यक्ती", "field.location": "स्थान",
    "field.source": "स्रोत", "field.tags": "टॅग", "field.importance": "महत्त्व", "field.verification": "पडताळणी",
    "field.related": "संबंधित पुरावे", "field.notes": "नोंदी", "field.comma": "स्वल्पविरामाने वेगळे करा",
    "detail.metadata": "मेटाडेटा", "detail.related": "संबंधित पुरावे", "detail.noRelated": "कोणताही संबंधित पुरावा जोडलेला नाही.",
    "detail.description": "वर्णन आणि नोंदी", "detail.userNote": "वापरकर्त्याची नोंद", "detail.noAttachment": "कोणतेही संलग्नक जोडलेले नाही.",
    "detail.previousEvent": "मागील घटना", "detail.nextEvent": "पुढील घटना", "detail.showContext": "संदर्भ दाखवा",
};

const literalMr = {
    "No evidence added yet.": "अद्याप कोणताही पुरावा जोडलेला नाही.",
    "No timeline events added yet.": "अद्याप कोणतीही कालरेषा घटना जोडलेली नाही.",
    "No audio evidence added yet.": "अद्याप कोणताही ऑडिओ पुरावा जोडलेला नाही.",
    "No chat records added yet.": "अद्याप कोणत्याही चॅट नोंदी जोडलेल्या नाहीत.",
    "No call logs added yet.": "अद्याप कोणत्याही कॉल नोंदी जोडलेल्या नाहीत.",
    "No travel records added yet.": "अद्याप कोणत्याही प्रवास नोंदी जोडलेल्या नाहीत.",
    "No financial records added yet.": "अद्याप कोणत्याही आर्थिक नोंदी जोडलेल्या नाहीत.",
    "No documents added yet.": "अद्याप कोणतेही दस्तऐवज जोडलेले नाहीत.",
    "No media evidence added yet.": "अद्याप कोणताही मीडिया पुरावा जोडलेला नाही.",
    "No people added yet.": "अद्याप कोणतीही व्यक्ती जोडलेली नाही.",
    "No evidence available to export yet.": "निर्यात करण्यासाठी अद्याप कोणताही पुरावा उपलब्ध नाही.",
    "Audio": "ऑडिओ", "Chat / Message": "चॅट / संदेश", "Call Log": "कॉल नोंद", "Photo / Screenshot": "फोटो / स्क्रीनशॉट",
    "Video": "व्हिडिओ", "Travel": "प्रवास", "Financial / Payment": "आर्थिक / देयक", "Bill / Receipt": "बिल / पावती",
    "Email": "ईमेल", "Document": "दस्तऐवज", "Legal Document": "कायदेशीर दस्तऐवज", "Timeline Event": "कालरेषा घटना",
    "Person": "व्यक्ती", "Other": "इतर", "Audio Recordings": "ऑडिओ रेकॉर्डिंग", "Chats / Messages": "चॅट / संदेश",
    "Call Logs": "कॉल नोंदी", "Photos / Screenshots": "फोटो / स्क्रीनशॉट", "Financial Records": "आर्थिक नोंदी",
    "Bills / Receipts": "बिले / पावत्या", "Emails": "ईमेल", "Documents": "दस्तऐवज", "Legal Documents": "कायदेशीर दस्तऐवज",
    "Timeline": "कालरेषा", "People": "व्यक्ती", "Other Evidence": "इतर पुरावे", "Location / Visits": "स्थान / भेटी",
    "Gifts / Purchases": "भेटवस्तू / खरेदी", "Medical Records": "वैद्यकीय नोंदी", "Family Meetings": "कौटुंबिक बैठका",
    "Important Incidents": "महत्त्वाच्या घटना", "Witnesses / People": "साक्षीदार / व्यक्ती", "Bank / Payment Records": "बँक / देयक नोंदी",
    "Recording date/time": "रेकॉर्डिंगचा दिनांक/वेळ", "Duration": "कालावधी", "Participants": "सहभागी", "Transcript": "प्रतिलेख",
    "Important timestamps": "महत्त्वाच्या वेळखुणा", "From": "पासून", "To": "पर्यंत", "Departure": "प्रस्थान", "Arrival": "आगमन",
    "Transport type": "वाहतुकीचा प्रकार", "Booking reference": "बुकिंग संदर्भ", "Amount": "रक्कम", "Sender": "पाठवणारा",
    "Receiver": "प्राप्तकर्ता", "Payment method": "देयक पद्धत", "Transaction / reference ID": "व्यवहार / संदर्भ आयडी",
    "Purpose": "उद्देश", "Platform": "प्लॅटफॉर्म", "Message timestamp": "संदेशाची वेळ", "Message content": "संदेश मजकूर",
    "Direction": "दिशा", "Phone / contact": "फोन / संपर्क", "Document date": "दस्तऐवजाचा दिनांक", "Page count": "पृष्ठ संख्या",
    "Relationship / role": "नाते / भूमिका", "Aliases": "इतर नावे", "Phone / email": "फोन / ईमेल",
};

const EvidenceLanguageContext = createContext(null);

export const EvidenceLanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => localStorage.getItem(STORAGE_KEY) || "en");
    const setLanguage = (next) => { localStorage.setItem(STORAGE_KEY, next); setLanguageState(next); };
    const value = useMemo(() => ({
        language,
        setLanguage,
        t: (key, fallback = key) => language === "mr" ? (mr[key] || fallback) : fallback,
        translate: (text) => language === "mr" ? (literalMr[text] || text) : text,
    }), [language]);
    return <EvidenceLanguageContext.Provider value={value}>{children}</EvidenceLanguageContext.Provider>;
};

export const useEvidenceLanguage = () => {
    const context = useContext(EvidenceLanguageContext);
    if (!context) throw new Error("useEvidenceLanguage must be used inside EvidenceLanguageProvider");
    return context;
};
