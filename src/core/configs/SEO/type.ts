export interface IRobots {
	index: boolean;
	follow: boolean;
}

export interface IOpenGraph {
	enable: boolean;
	locale: string;
	type: string;
	image: string;
}

export interface ITwitter {
	enable: boolean;
	username: string;
	card: string;
	image: string;
}

export interface IIcons {
	src: string;
	shortcut: string;
	android: number[];
	microsoft: number;
	apple: {
		default: string;
		items: number[];
	};
}

export interface IViewport {
	width: string;
	initialScale: number;
	userScalable: boolean;
}

export interface IDefaultSEOType {
	title: string;
	description: string;
	keywords: string;
	timeRefresh: number;
	siteName: string;
	siteDomain: string;
	siteURL: string;
	themeColor: string;
	author: string;
	copyright: string;
	robots: IRobots;
	openGraph: IOpenGraph;
	twitter: ITwitter;
	manifest: string;
	viewport: IViewport;
	icons: IIcons;
	siteCapable: boolean
}