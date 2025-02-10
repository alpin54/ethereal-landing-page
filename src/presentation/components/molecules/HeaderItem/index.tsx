// -- core
import Link from "next/link";
import { motion } from "framer-motion";

// -- utils
import { slide, scale } from "@utils/animation";

// -- atoms
import Magnetic from "@atoms/Magnetic";

// -- style
import style from "./style.module.scss";

interface Data {
	title: string;
	to: string;
	idx: number;
}

interface HeaderItemProps {
	data: Data;
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	setSelectedIndicator: (to: string) => void;
}

const HeaderItem: React.FC<HeaderItemProps> = (props) => {
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
