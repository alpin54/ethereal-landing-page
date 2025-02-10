// -- core
import Link from "next/link";
import React from "react";

// -- style
import style from "./style.module.scss";

// -- atoms
import Magnetic from "@atoms/Magnetic";

// -- interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
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
