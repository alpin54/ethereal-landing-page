import { IDefaultSEOType } from './type';

// --- DefaultSEO
const DefaultSEO: IDefaultSEOType = {
	title: "Ethereal",
	description: "Description ethereal",
	keywords: "Ethereal",
	timeRefresh: 900,
	siteName: "ethereal",
	siteDomain: "https://ethereal-landing-page.vercel.app",
	siteURL: "https://ethereal-landing-page.vercel.app",
	themeColor: "#ff5caa",
	author: "Alpin",
	copyright: "© 2025 Ethereal. All rights reserved",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		enable: true,
		locale: "en_US",
		type: "website",
		image: "/default/og-facebook.jpg",
	},
	twitter: {
		enable: true,
		username: "@alphax_id",
		card: "summary_large_image",
		image: "/default/twitter-card.jpg",
	},
	manifest: "",
	viewport: {
		width: "device-width",
		initialScale: 1,
		userScalable: true,
	},
	icons: {
		// -- src
		src: "/homescreen/",

		// -- shortcut
		shortcut: "favicon.ico",

		// -- android
		android: [16, 32, 96, 144, 192],

		// -- microsoft
		microsoft: 144,

		// -- apple
		apple: {
			default: "apple-icon.png",
			items: [57, 60, 72, 76, 114, 120, 144, 152, 180],
		},
	},
	siteCapable: true
};

export default DefaultSEO;