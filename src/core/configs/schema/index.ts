import { DefaultSchemaType } from './type';

// --- DefaultSchema
const DefaultSchema: DefaultSchemaType = {
	organization: {
		context: "http://schema.org",
		id: "https://ethereal-psi.vercel.app#organization",
		type: "Organization",
		name: "Ethereal",
		url: "https://ethereal-psi.vercel.app",
		logo: "https://ethereal-psi.vercel.app/logo/logo.png",
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
		id: "https://ethereal-psi.vercel.app#website",
		type: "WebSite",
		url: "https://ethereal-psi.vercel.app",
		name: "Ethereal",
	},
	webpage: {
		context: "http://schema.org",
		id: "https://ethereal-psi.vercel.app#webpage",
		type: "WebPage",
		url: "https://ethereal-psi.vercel.app",
		name: "Ethereal",
	},
};

export default DefaultSchema;