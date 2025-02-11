"use client";

// -- core
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import { opacity, slideUp } from "@utils/animation";

const words: string[] = [
	"Hello",
	"Bonjour",
	"Ciao",
	"Olà",
	"やあ",
	"Hallå",
	"Guten tag",
	"Hallo",
];

interface Dimension {
	width: number;
	height: number;
}

const Preloader: React.FC = () => {
	const [index, setIndex] = useState<number>(0);
	const [dimension, setDimension] = useState<Dimension>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (index === words.length - 1) return;
		const timeoutId = setTimeout(
			() => {
				setIndex(index + 1);
			},
			index === 0 ? 1000 : 150
		);

		return () => clearTimeout(timeoutId);
	}, [index]);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
		dimension.height
	} L0 0`;
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className={style.introduction}
		>
			{dimension.width > 0 && (
				<>
					<motion.p variants={opacity} initial="initial" animate="enter">
						<span></span>
						{words[index]}
					</motion.p>
					<svg>
						<motion.path
							variants={curve}
							initial="initial"
							exit="exit"
						></motion.path>
					</svg>
				</>
			)}
		</motion.div>
	);
};

export default Preloader;
