"use client";

// -- core
import React, { useRef, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useScroll, useTransform } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const Cta: React.FC = () => {
	const container = useRef<HTMLDivElement | null>(null);
	const [enableParallax, setEnableParallax] = useState<boolean>(true);

	// Check screen width to enable/disable parallax effect
	useEffect(() => {
		const handleResize = () => {
			setEnableParallax(window.innerWidth > 768);
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

	return (
		<section className={style.cta} id="cta" ref={container}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.text}>
						<p className={style.subtitle}>Your vision, realized.</p>
						<div className={style.headline}>
							<h2 className={style.title}>
								Let’s get <br /> started.
							</h2>
							<Button href="#get-started">Get Started</Button>
						</div>
					</div>
					<div className={style.img}>
						{enableParallax ? (
							<motion.div style={{ y }} className={style.imgWrapper}>
								<LazyLoadImage
									src="/bg/cta-2.jpg"
									alt="hero-banner"
									className={style.imgEl}
									width={638}
									height={1080}
								/>
							</motion.div>
						) : (
							<div className={style.imgWrapper}>
								<LazyLoadImage
									src="/bg/cta-2.jpg"
									alt="hero-banner"
									className={style.imgEl}
									width={638}
									height={1080}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
