"use client";

// -- core
import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import { slideLoop } from "@utils/animation";

// -- atoms
import Button from "@atoms/Button";

// -- data
const textItems: string[] = [
	"Art & Finance",
	"Seamless transactions with low fees",
	"Empower artists and creators",
	"Secure and transparent platform",
];

const HeroBanner: React.FC = () => {
	const [index, setIndex] = useState<number>(0);
	const container = useRef<HTMLDivElement | null>(null);
	const taglineRef = useRef<HTMLHeadingElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const [paddingBottom, setPaddingBottom] = useState<number>(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex((prevIndex) => (prevIndex + 1) % textItems.length);
		}, 3000);

		return () => clearTimeout(timer);
	}, [index]);

	useEffect(() => {
		if (taglineRef.current) {
			const height = taglineRef.current.offsetHeight;
			setPaddingBottom(height);
		}
	}, [index]);

	return (
		<section className={style.banner} id="hero-banner">
			<div className="container">
				<motion.div style={{ y }} className={style.img}>
					<LazyLoadImage
						src="/bg/hero-banner.jpg"
						alt="hero-banner"
						className={style.imgEl}
						width={1400}
						height={900}
					/>
				</motion.div>
				<div className={style.content}>
					<h1 className={style.title}>Discover the Future of Decentralized</h1>
					<h2
						className={style.tagline}
						style={{ paddingBottom: `${paddingBottom}px` }}
					>
						<AnimatePresence>
							<motion.span
								variants={slideLoop}
								key={index}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									y: { type: "spring", stiffness: 100, damping: 30 },
									opacity: { duration: 0.3 },
								}}
								ref={taglineRef}
							>
								{textItems[index]}
							</motion.span>
						</AnimatePresence>
					</h2>
					<Button href="#get-started">Get Started</Button>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
