interface IData {
	title: string;
	to: string;
	idx: number;
}

export interface IHeaderItem {
	data: IData;
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	setSelectedIndicator: (to: string) => void;
}