import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ children, content, delay = 0.2 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);

    const updatePosition = () => {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top + window.scrollY,
                left: rect.left + rect.width / 2 + window.scrollX
            });
        }
    };

    const handleMouseEnter = () => {
        updatePosition();
        setIsVisible(true);
    };

    useEffect(() => {
        if (isVisible) {
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition);
            return () => {
                window.removeEventListener('resize', updatePosition);
                window.removeEventListener('scroll', updatePosition);
            };
        }
    }, [isVisible]);

    return (
        <>
            <div
                ref={triggerRef}
                className="relative inline-flex items-center justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setIsVisible(false)}
            >
                {children}
            </div>
            {createPortal(
                <AnimatePresence>
                    {isVisible && (
                        <div
                            style={{
                                position: 'absolute',
                                top: coords.top,
                                left: coords.left,
                                zIndex: 9999,
                                pointerEvents: 'none'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 5, x: "-50%" }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                                exit={{ opacity: 0, scale: 0.95, y: 5, x: "-50%" }}
                                transition={{ duration: 0.15, delay }}
                                className="absolute bottom-0 mb-2"
                            >
                                <div className="bg-foreground text-background text-[10px] font-semibold px-2.5 py-1 rounded shadow-xl whitespace-nowrap border border-background/10">
                                    {content}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[5px] border-transparent border-t-foreground" />
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Tooltip;
