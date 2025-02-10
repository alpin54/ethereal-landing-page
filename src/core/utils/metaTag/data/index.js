// -- config
import DefaultSEO from "@configs/SEO";

// -- utils
import metaTagIcons from "@utils/metaTag/data/icons";

// -- metaTagData
const metaTagData = () => {
	return {
		authors: [
			{
				name: DefaultSEO.author,
			},
		],
		robots: {
			...DefaultSEO.robots,
			googleBot: {
				...DefaultSEO.robots,
			},
		},
		manifest: DefaultSEO.manifest,
		icons: metaTagIcons(),
		other: {
			// -- android add to home screen
			"application-name": DefaultSEO.siteName,
			"mobile-web-app-capable": DefaultSEO.siteCapable ? "yes" : "no",

			// -- windows microsoft
			"msapplication-TileColor": DefaultSEO.themeColor,
			"msapplication-TileImage": `${DefaultSEO.icons.src}ms-icon-${DefaultSEO.icons.microsoft}x${DefaultSEO.icons.microsoft}.png`,

			// -- apple add to home screen
			"apple-mobile-web-app-title": DefaultSEO.siteName,
			"apple-mobile-web-app-capable": DefaultSEO.siteCapable ? "yes" : "no",
			"apple-mobile-web-app-status-bar-style": DefaultSEO.themeColor,
		},
	};
};

export default metaTagData;
