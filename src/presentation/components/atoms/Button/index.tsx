// -- core
import React from "react";
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- atoms
import Magnetic from "@atoms/Magnetic";

// -- interface
import { IButton } from "./type";

const Button: React.FC<IButton> = (props) => {
	const { children, href, ...rest } = props;

	if (href) {
		return (
			<Magnetic>
				<Link href={href} className={style.btn}>
					{children}
				</Link>
			</Magnetic>
		);
	}

	return (
		<Magnetic>
			<button {...rest} className={style.btn}>
				{children}
			</button>
		</Magnetic>
	);
};

export default Button;
