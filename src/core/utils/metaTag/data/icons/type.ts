interface IMetaTagIcon {
	url: string;
	sizes: string;
	type?: string;
}

export interface IMetaTagIconsResult {
	shortcut: string;
	icon: IMetaTagIcon[];
	apple: IMetaTagIcon[];
	other: { rel: string, url: string }[];
}