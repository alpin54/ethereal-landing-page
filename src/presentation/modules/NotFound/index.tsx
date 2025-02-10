"use client";

// -- core
import { useEffect } from "react";

// -- organisms
import NotFoundSection from "@organisms/NotFoundSection";

type LocomotiveScrollInstance = {
	destroy: () => void;
};

const NotFound: React.FC = () => {
	useEffect(() => {
		let locomotiveScroll: LocomotiveScrollInstance | null = null;

		const initLocomotiveScroll = async () => {
			try {
				const LocomotiveScroll = (await import("locomotive-scroll")).default;
				locomotiveScroll = new LocomotiveScroll({
					el: document.querySelector("[data-scroll-container]") as HTMLElement,
					smooth: true,
				});

				setTimeout(() => {
					document.body.style.cursor = "default";
					window.scrollTo(0, 0);
				}, 1000);
			} catch (error) {
				console.error("Error loading Locomotive Scroll:", error);
			}
		};

		initLocomotiveScroll();

		return () => {
			if (locomotiveScroll) {
				locomotiveScroll.destroy();
			}
		};
	}, []);

	return <NotFoundSection />;
};

export default NotFound;
