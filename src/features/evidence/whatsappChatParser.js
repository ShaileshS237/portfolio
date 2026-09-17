const MESSAGE_PATTERN = /^\[(\d{1,2})\/(\d{1,2})\/(\d{2}),\s+(\d{1,2}):(\d{2}):(\d{2})\s*([AP])M\]\s+([^:]+):\s?(.*)$/;

const normalizeSender = (value) => value.replace(/^~/, "").trim();

const to24HourTime = (hour, minute, second, period) => {
    let normalizedHour = Number(hour) % 12;
    if (period === "P") normalizedHour += 12;
    return `${String(normalizedHour).padStart(2, "0")}:${minute}:${second}`;
};

export const parseWhatsAppExport = (text = "") => {
    const messages = [];

    text.replaceAll("\r", "").split("\n").forEach((line) => {
        const match = line.match(MESSAGE_PATTERN);
        if (!match) {
            if (line.trim() && messages.length) messages[messages.length - 1].message += `\n${line}`;
            return;
        }

        const [, day, month, year, hour, minute, second, period, rawSender, message] = match;
        const date = `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        const time = to24HourTime(hour, minute, second, period);
        messages.push({
            id: `wa-${messages.length + 1}`,
            date,
            time,
            timestamp: `${date}T${time}`,
            sender: normalizeSender(rawSender),
            message: message.trim(),
        });
    });

    return messages.filter((item) => item.message);
};

