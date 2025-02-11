// -- config
import DefaultSEO from "@configs/SEO";

interface MetaTagDynamicData {
	page?: string;
	link?: string;
	ogImage?: string;
	title?: string;
	twitterImage?: string;
}

interface OpenGraph {
	locale: string;
	type: string;
	siteName: string;
	title: string;
	description: string;
	url: string;
	images: { url: string; alt: string }[];
}

interface Twitter {
	card: string;
	site: string;
	siteId: string;
	creator: string;
	title: string;
	description: string;
	images: string[];
}

interface MetaTagDynamicResult {
	title: string;
	description: string;
	keywords: string;
	alternates: {
		canonical: string;
	};
	openGraph?: OpenGraph;
	twitter?: Twitter;
}

// -- metaTagDynamic
const metaTagDynamic = (data: MetaTagDynamicData): MetaTagDynamicResult => {
	return {
		title: data?.page
			? data.page + " | " + DefaultSEO.title
			: DefaultSEO.title,
		description: data?.page
			? data.page + " | " + DefaultSEO.description
			: DefaultSEO.description,
		keywords: data?.page
			? data.page + " | " + DefaultSEO.keywords
			: DefaultSEO.keywords,
		alternates: {
			canonical: data?.link ? data.link : DefaultSEO.siteURL,
		},
		...(DefaultSEO.openGraph.enable && {
			openGraph: {
				locale: DefaultSEO.openGraph.locale,
				type: DefaultSEO.openGraph.type,
				siteName: DefaultSEO.siteName,
				title: data?.page
					? data.page + " | " + DefaultSEO.title
					: DefaultSEO.title,
				description: data?.page
					? data.page + " | " + DefaultSEO.description
					: DefaultSEO.description,
				url: DefaultSEO.siteURL,
				images: [
					{
						url: data?.ogImage ? data.ogImage : DefaultSEO.openGraph.image,
						alt: data?.title ? data.title : DefaultSEO.title,
					},
				],
			},
		}),
		...(DefaultSEO.twitter.enable && {
			twitter: {
				card: DefaultSEO.twitter.card,
				site: DefaultSEO.twitter.username,
				siteId: DefaultSEO.twitter.username,
				creator: DefaultSEO.twitter.username,
				title: data?.page
					? data.page + " | " + DefaultSEO.title
					: DefaultSEO.title,
				description: data?.page
					? data.page + " | " + DefaultSEO.description
					: DefaultSEO.description,
				images: [
					data?.twitterImage ? data.twitterImage : DefaultSEO.twitter.image,
				],
			},
		}),
	};
};

export default metaTagDynamic;