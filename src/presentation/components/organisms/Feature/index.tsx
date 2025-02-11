"use client";

// -- core
import React from "react";

// -- molecules
import FeatureItem from "@molecules/FeatureItem";

// -- style
import style from "./style.module.scss";

// -- interface
import { IFeatureList } from "./type";

// -- data
const feature: IFeatureList[] = [
	{
		icon: "design.svg",
		title: "Otherworldly Design",
		description:
			"Crafted with an aesthetic that defies the mundane, our Ethereal Feature boasts a design that captivates and inspires. Each detail is meticulously curated to evoke a sense of wonder, making it a stunning addition to your lifestyle.",
	},
	{
		icon: "integration.svg",
		title: "Seamless Integration",
		description:
			"Effortlessly blend the extraordinary into your daily routine. Our Ethereal Feature is designed to integrate seamlessly with your existing lifestyle, enhancing your experience without disruption.",
	},
	{
		icon: "functionality.svg",
		title: "Intuitive Functionality",
		description:
			"Experience technology that feels like an extension of yourself. With intuitive controls and smart features, our Ethereal Feature adapts to your preferences, making every interaction feel effortless and natural.",
	},
];
const FeatureSection: React.FC = () => {
	return (
		<section className={style.feature} id="features">
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>Unlock a World Beyond the Ordinary</h2>
					<p className={style.desc}>
						Step into a realm where reality meets imagination. Our Ethereal
						Feature transcends the conventional, offering you an experience that
						feels almost magical. Imagine a product that not only meets your
						needs but elevates your senses, creating a connection that is both
						profound and transformative
					</p>
				</div>
				<div className={style.body}>
					{feature.map((val, idx) => (
						<div className={style.item} key={idx}>
							<FeatureItem {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;
