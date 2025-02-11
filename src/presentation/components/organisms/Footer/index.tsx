"use client";

// -- core
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// -- style
import style from "./style.module.scss";

// -- atoms
import SystemIcon from "@atoms/SystemIcon";
import Magnetic from "@atoms/Magnetic";
import ButtonRainbow from "@atoms/ButtonRainbow";

// -- interface
import { IListData } from "../Header/type";

// -- data navItems
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

const Footer: React.FC = () => {
	const handleScroll = (
		event: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		event.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.grid}>
						<div className={style.item}>
							<h6 className={style.title}>Contact</h6>
							<a href="tel:085161713262" className={style.link}>
								+62-851-6171-3262
							</a>
							<a href="mailto:alpinn@gmail.com" className={style.link}>
								alpinn@gmail.com
							</a>
						</div>
						<div className={style.item}>
							<h6 className={style.title}>Navigation Menu</h6>
							<ul className={style.nav}>
								{navItems.map((val, indx) => (
									<li key={indx} className={style.navItem}>
										<a
											href={val.to}
											className={style.navLink}
											onClick={(e) => handleScroll(e, val.to)}
										>
											{val.title}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className={style.item}>
							<h6 className={style.title}>Follow</h6>
							<div className={style.social}>
								{sosmedList.map((val, idx) => {
									return (
										<Magnetic key={"social-" + idx}>
											<a
												href={val.to}
												target="_blank"
												rel="noopener noreferrer"
												className={`${style.socialLink} ${val.title}`}
											>
												<SystemIcon name={val.title} />
											</a>
										</Magnetic>
									);
								})}
							</div>
						</div>
						<div className={style.item}>
							<h6 className={style.title}>Connect Wallet</h6>
							<ButtonRainbow />
						</div>
					</div>
					<div className={style.logo}>
						<LazyLoadImage
							src="/logo/ethereal-text.svg"
							alt="ethereal"
							className={style.logoImg}
							width={1400}
							height={240}
						/>
					</div>
					<div className={style.copyright}>
						<p className={style.copyrightText}>
							© 2025 Ethereal. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
