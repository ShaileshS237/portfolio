import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();
	const navType = useNavigationType();

	useEffect(() => {
		// Only scroll to top if it's a PUSH navigation (new page)
		// Skip on POP navigation (back/forward) to allow browser to restore scroll position
		if (navType !== "POP") {
			window.scrollTo(0, 0);

			// Double check after a tiny delay to handle any late layout shifts
			const timeoutId = setTimeout(() => {
				window.scrollTo(0, 0);
			}, 10);

			return () => clearTimeout(timeoutId);
		}
	}, [pathname, navType]);

	return null;
}
