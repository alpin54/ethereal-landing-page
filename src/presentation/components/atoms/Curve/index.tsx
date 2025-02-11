// -- core
import React from "react";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

const Index: React.FC = () => {
	const [windowHeight, setWindowHeight] = React.useState<number>(
		window.innerHeight
	);

	React.useEffect(() => {
		const handleResize = () => {
			setWindowHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${
		windowHeight / 2
	} 100 0`;
	const targetPath = `M100 0 L100 ${windowHeight} Q100 ${
		windowHeight / 2
	} 100 0`;

	const curve = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: initialPath,
			transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
	};

	return (
		<svg className={style.svgCurve}>
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
};

export default Index;
