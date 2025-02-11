"use client";

// -- core
import { LazyLoadImage } from "react-lazy-load-image-component";

// -- style
import style from "./style.module.scss";

// -- atoms
import Magnetic from "@atoms/Magnetic";

// -- interface
interface FeatureItemProps {
	icon: string;
	title: string;
	description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = (props) => {
	const { icon, title, description } = props;

	return (
		<div className={style.card}>
			<Magnetic>
				<div className={style.icon}>
					<LazyLoadImage
						src={`/icon/${icon}`}
						alt={title}
						className={style.iconImg}
						width={40}
						height={40}
					/>
				</div>
			</Magnetic>
			<h3 className={style.title}>{title}</h3>
			<p className={style.desc}>{description}</p>
		</div>
	);
};

export default FeatureItem;
