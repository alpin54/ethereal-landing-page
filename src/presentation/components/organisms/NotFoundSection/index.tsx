// -- core
import { LazyLoadImage } from "react-lazy-load-image-component";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const NotFoundSection: React.FC = () => {
	return (
		<section className={style.notfound}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.text}>
						<h1 className={style.title}>404</h1>
						<h2 className={style.subtitle}>Page Not Found</h2>
						<p className={style.desc}>
							Sorry, the page you’re looking for does not exist or has been
							moved please go back to the Home page
						</p>
						<Button href="/">Go Back Home</Button>
					</div>
					<div className={style.img}>
						<LazyLoadImage
							src="/bg/not-found.svg"
							alt="not-found"
							className={style.imgEl}
							width={508}
							height={660}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFoundSection;
