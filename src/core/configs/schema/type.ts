export interface IContactPoint {
	"@type": string;
	telephone: string;
	contactType: string;
	areaServed: string;
}

export interface IOrganization {
	context: string;
	id: string;
	type: string;
	name: string;
	url: string;
	logo: string;
	contactPoint: IContactPoint[];
	sameAs: string[];
}

export interface IWebsite {
	context: string;
	id: string;
	type: string;
	url: string;
	name: string;
}

export interface IWebPage {
	context: string;
	id: string;
	type: string;
	url: string;
	name: string;
}

export interface IDefaultSchemaType {
	organization: IOrganization;
	website: IWebsite;
	webpage: IWebPage;
}