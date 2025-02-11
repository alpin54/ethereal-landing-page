"use client";

// -- core
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// -- style
import style from "./style.module.scss";

// -- interface
import { IFeatureItem } from "./type";

const FeatureItem: React.FC<IFeatureItem> = (props) => {
	const { icon, title, description } = props;

	return (
		<div className={style.card}>
			<div className={style.icon}>
				<LazyLoadImage
					src={`/icon/${icon}`}
					alt={title}
					className={style.iconImg}
					width={40}
					height={40}
				/>
			</div>
			<h3 className={style.title}>{title}</h3>
			<p className={style.desc}>{description}</p>
		</div>
	);
};

export default FeatureItem;
