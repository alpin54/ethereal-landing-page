export interface IAuthor {
  name: string;
}

export interface IRobots {
  index: boolean;
  follow: boolean;
  googleBot?: IRobots;
}

export interface IOtherMetaTags {
  "application-name": string;
  "mobile-web-app-capable": "yes" | "no";
  "msapplication-TileColor": string;
  "msapplication-TileImage": string;
  "apple-mobile-web-app-title": string;
  "apple-mobile-web-app-capable": "yes" | "no";
  "apple-mobile-web-app-status-bar-style": string;
}