"use client";

// -- core
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

// -- style
import style from "./style.module.scss";

// -- atoms
import SystemIcon from "@atoms/SystemIcon";

const ThemeButton: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const sunRef = useRef<HTMLDivElement | null>(null);
	const moonRef = useRef<HTMLDivElement | null>(null);
	const animationRef = useRef<GSAPTimeline | null>(null);

	useEffect(() => {
		gsap.registerPlugin(CustomEase);
		CustomEase.create("spinner", "0.2, 0.6, 0.3, 1.1");

		animationRef.current = gsap
			.timeline({ paused: true })
			.to(sunRef.current, {
				duration: 0.4,
				rotation: 180,
				opacity: 0,
				ease: "spinner",
			})
			.to(
				moonRef.current,
				{ duration: 0.4, rotation: 360, opacity: 1, ease: "spinner" },
				"-=0.2"
			);
	}, []);

	const toggleTheme = () => {
		if (!animationRef.current) return;

		const isDarkMode = theme === "dark";

		if (isDarkMode) {
			animationRef.current.reverse();
		} else {
			animationRef.current.play();
		}

		setTimeout(() => {
			setTheme(isDarkMode ? "light" : "dark");
		}, 200);
	};

	return (
		<button className={style.theme} onClick={toggleTheme}>
			<span className={style.sun} ref={sunRef}>
				<SystemIcon name="sun" />
			</span>
			<span className={style.moon} ref={moonRef} style={{ opacity: 0 }}>
				<SystemIcon name="moon" />
			</span>
		</button>
	);
};

export default ThemeButton;
