"use client";

// -- core
import React, { useEffect, useLayoutEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// -- style
import style from "./style.module.scss";

// -- utils
import { menuSlide } from "@utils/animation";

// -- atoms
import Curve from "@atoms/Curve";
import ButtonRainbow from "@atoms/ButtonRainbow";
import SystemIcon from "@atoms/SystemIcon";
import Magnetic from "@atoms/Magnetic";

// -- molecules
import HeaderItem from "@molecules/HeaderItem";

// -- interface
import { IListData } from "../Header/type";

// -- data nav list
const navItems: IListData[] = [
	{ title: "Hero", to: "#hero-banner" },
	{ title: "Features", to: "#features" },
	{ title: "CTA", to: "#cta" },
];

// -- data sosmed
const sosmedList: IListData[] = [
	{ title: "instagram", to: "https://instagram.com" },
	{ title: "facebook", to: "https://facebook.com" },
	{ title: "linkedin", to: "https://linkedin.com" },
	{ title: "twitter", to: "https://twitter.com" },
];

const Header: React.FC = () => {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		const body = document.body;
		body.classList.toggle("rm-scroll", isActive);
		body.classList.toggle("show-menu", isActive);
	}, [isActive]);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	const handleScroll = () => {
		const sections = navItems.map((item) => document.querySelector(item.to));
		const scrollPosition = window.scrollY + window.innerHeight / 2;

		sections.forEach((section, index) => {
			if (
				section &&
				(section as HTMLElement).offsetTop <= scrollPosition &&
				(section as HTMLElement).offsetTop +
					(section as HTMLElement).clientHeight >
					scrollPosition
			) {
				setSelectedIndicator(navItems[index].to);
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={style.header}>
			<div className={style.bar}>
				<div className={style.burgerMenu}>
					<button
						type="button"
						className={style.burgerMenuToggle}
						onClick={() => setIsActive((prev) => !prev)}
						aria-label="Toggle menu"
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className={style.logo}>
					<Link href="/" className={style.logoLink} aria-label="logo">
						<LazyLoadImage
							src="/logo/ethereal-text.svg"
							alt="logo"
							className={style.logoImg}
							width={200}
							height={32}
						/>
					</Link>
				</div>
				<div className={style.mark}>
					<Link href="/" className={style.markLink} aria-label="logo">
						<LazyLoadImage
							src="/logo/ethereal-w.svg"
							alt="logo"
							className={style.markImg}
							width={48}
							height={40}
						/>
					</Link>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isActive && (
					<motion.div
						variants={menuSlide}
						initial="initial"
						animate="enter"
						exit="exit"
						className={style.menu}
					>
						<div className={style.body}>
							<div className={style.nav}>
								{navItems.map((val, idx) => (
									<HeaderItem
										key={idx}
										data={{ ...val, idx }}
										isActive={selectedIndicator === val.to}
										setIsActive={setIsActive}
										setSelectedIndicator={setSelectedIndicator}
									/>
								))}
							</div>
						</div>
						<div className={style.footer}>
							<div className={style.info}>
								<p className={style.infoLabel}>Contact</p>
								<a href="tel:085161713262" className={style.infoLink}>
									+62-851-6171-3262
								</a>
								<a href="mailto:alpinn@gmail.com" className={style.infoLink}>
									alpinn@gmail.com
								</a>
							</div>
							<div className={style.info}>
								<p className={style.infoLabel}>Connect Wallet</p>
								<ButtonRainbow />
							</div>
							<div className={style.social}>
								{sosmedList.map((val, idx) => {
									return (
										<Magnetic key={"social-" + idx}>
											<a
												href={val.to}
												target="_blank"
												rel="noopener noreferrer"
												className={`${style.socialLink} ${val.title}`}
												aria-label={val.title}
											>
												<SystemIcon name={val.title} />
											</a>
										</Magnetic>
									);
								})}
							</div>
						</div>
						<Curve />
					</motion.div>
				)}
			</AnimatePresence>
			<div
				className={style.background}
				onClick={(): void => setIsActive(false)}
			></div>
		</header>
	);
};

export default Header;
