// -- interface
import React from "react";
import { ISystemIcon } from "./type";

const SystemIcon: React.FC<ISystemIcon> = ({ name }) => {
	const classNames = `ei-${name}`;

	return <i className={classNames}></i>;
};

export default SystemIcon;
