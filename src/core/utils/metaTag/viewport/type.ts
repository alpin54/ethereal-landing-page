interface IViewport {
	width: string;
	initialScale: number;
	userScalable: boolean;
}

export interface IMetaTagViewportResult extends IViewport {
	themeColor: string;
}