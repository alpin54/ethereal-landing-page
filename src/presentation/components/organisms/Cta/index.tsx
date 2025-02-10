// -- core
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// -- atoms
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

const Cta: React.FC = () => {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

	return (
		<section className={style.cta} id="cta">
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
						<motion.div style={{ y }} className={style.imgWrapper}>
							<LazyLoadImage
								src="/bg/cta.jpg"
								alt="hero-banner"
								className={style.imgEl}
								width={638}
								height={1080}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
