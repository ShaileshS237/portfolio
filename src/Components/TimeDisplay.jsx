import React, { useState, useEffect } from "react";

const TimeDisplay = ({ timeZone = "Asia/Kolkata", label = "IST" }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const options = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const timeString = time.toLocaleTimeString('en-US', options);

    return (
        <span className="font-mono">
            {timeString} <span className="text-muted-foreground text-xs ml-1">({label})</span>
        </span>
    );
};

export default TimeDisplay;
