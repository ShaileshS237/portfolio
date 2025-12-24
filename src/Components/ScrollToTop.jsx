import { useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname, search } = useLocation();
	const navType = useNavigationType();
	const positionsRef = useRef({});
	const pathKey = useMemo(() => `${pathname}${search}`, [pathname, search]);
	const prevPathRef = useRef(pathKey);

	// Track scroll position per route so we can restore it on back/forward
	useEffect(() => {
		const handleScroll = () => {
			positionsRef.current[pathKey] = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathKey]);

	useEffect(() => {
		const previousPathKey = prevPathRef.current;
		if (previousPathKey !== pathKey) {
			positionsRef.current[previousPathKey] = window.scrollY;
		}

		let timeoutId;
		let rafId;

		if (navType === "POP") {
			const savedY = positionsRef.current[pathKey] ?? 0;
			rafId = requestAnimationFrame(() => {
				window.scrollTo(0, savedY);
				timeoutId = window.setTimeout(() => window.scrollTo(0, savedY), 20);
			});
		} else {
			window.scrollTo(0, 0);
			timeoutId = window.setTimeout(() => window.scrollTo(0, 0), 10);
		}

		prevPathRef.current = pathKey;

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, [pathKey, navType]);

	return null;
}
