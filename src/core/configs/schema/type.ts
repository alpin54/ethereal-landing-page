export interface ContactPoint {
	"@type": string;
	telephone: string;
	contactType: string;
	areaServed: string;
}

export interface Organization {
	context: string;
	id: string;
	type: string;
	name: string;
	url: string;
	logo: string;
	contactPoint: ContactPoint[];
	sameAs: string[];
}

export interface Website {
	context: string;
	id: string;
	type: string;
	url: string;
	name: string;
}

export interface WebPage {
	context: string;
	id: string;
	type: string;
	url: string;
	name: string;
}

export interface DefaultSchemaType {
	organization: Organization;
	website: Website;
	webpage: WebPage;
}