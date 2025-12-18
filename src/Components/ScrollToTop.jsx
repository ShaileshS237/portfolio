import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Immediate scroll
		window.scrollTo(0, 0);

		// Double check after a tiny delay to handle any layout shifts
		const timeoutId = setTimeout(() => {
			window.scrollTo(0, 0);
		}, 10);

		return () => clearTimeout(timeoutId);
	}, [pathname]);

	return null;
}
