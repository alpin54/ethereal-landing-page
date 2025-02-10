interface SystemIconProps {
	name: string;
}
const SystemIcon: React.FC<SystemIconProps> = ({ name }) => {
	const classNames = `ei-${name}`;

	return <i className={classNames}></i>;
};

export default SystemIcon;
