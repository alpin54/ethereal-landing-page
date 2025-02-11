export interface IMetaTagDynamicData {
	page?: string;
	link?: string;
	ogImage?: string;
	title?: string;
	twitterImage?: string;
}

interface IOpenGraph {
	locale: string;
	type: string;
	siteName: string;
	title: string;
	description: string;
	url: string;
	images: { url: string; alt: string }[];
}

interface ITwitter {
	card: string;
	site: string;
	siteId: string;
	creator: string;
	title: string;
	description: string;
	images: string[];
}

export interface IMetaTagDynamicResult {
	title: string;
	description: string;
	keywords: string;
	alternates: {
		canonical: string;
	};
	openGraph?: IOpenGraph;
	twitter?: ITwitter;
}