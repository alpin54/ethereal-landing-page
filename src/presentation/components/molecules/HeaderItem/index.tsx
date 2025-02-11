"use client";

// -- core
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import { slide, scale } from "@utils/animation";

// -- atoms
import Magnetic from "@atoms/Magnetic";

// -- interface
import { IHeaderItem } from "./type";

const HeaderItem: React.FC<IHeaderItem> = (props) => {
	const { data, isActive, setIsActive, setSelectedIndicator } = props;
	const { title, to, idx } = data;

	const handleScroll = (
		event: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		event.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
			setIsActive(false);
		}
	};

	return (
		<motion.div
			className={style.item}
			onMouseEnter={() => {
				setSelectedIndicator(to);
			}}
			custom={idx}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className={style.indicator}
			/>
			<Magnetic>
				<Link
					href={to}
					className={style.link}
					onClick={(e) => handleScroll(e, to)}
				>
					{title}
				</Link>
			</Magnetic>
		</motion.div>
	);
};

export default HeaderItem;
