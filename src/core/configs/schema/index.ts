import { IDefaultSchemaType } from './type';

// --- DefaultSchema
const DefaultSchema: IDefaultSchemaType = {
	organization: {
		context: "http://schema.org",
		id: "https://ethereal-landing-page.vercel.app#organization",
		type: "Organization",
		name: "Ethereal",
		url: "https://ethereal-landing-page.vercel.app",
		logo: "https://ethereal-landing-page.vercel.app/logo/logo.png",
		contactPoint: [
			{
				"@type": "ContactPoint",
				telephone: "+62-81380003385",
				contactType: "sales",
				areaServed: "ID",
			},
		],
		sameAs: [
			"https://www.instagram.com/ethereal",
			"https://www.facebook.com/ethereal",
			"https://www.tiktok.com/@ethereal",
		],
	},
	website: {
		context: "http://schema.org",
		id: "https://ethereal-landing-page.vercel.app#website",
		type: "WebSite",
		url: "https://ethereal-landing-page.vercel.app",
		name: "Ethereal",
	},
	webpage: {
		context: "http://schema.org",
		id: "https://ethereal-landing-page.vercel.app#webpage",
		type: "WebPage",
		url: "https://ethereal-landing-page.vercel.app",
		name: "Ethereal",
	},
};

export default DefaultSchema;