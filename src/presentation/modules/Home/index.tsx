"use client";

// -- core
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// -- molecules
import Preloader from "@molecules/Preloader";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";
import Feature from "@organisms/Feature";
import Cta from "@organisms/Cta";

// -- type
type LocomotiveScrollInstance = {
	destroy: () => void;
};

const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);

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
					setIsLoading(false);
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

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			<HeroBanner />
			<Feature />
			<Cta />
		</>
	);
};

export default Home;
