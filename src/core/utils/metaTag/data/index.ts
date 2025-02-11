// -- config
import DefaultSEO from "@configs/SEO";

// -- utils
import metaTagIcons from "@utils/metaTag/data/icons";

// Define the Author interface
interface Author {
  name: string;
}

// Define the Robots interface
interface Robots {
  index: boolean;
  follow: boolean;
  googleBot?: Robots; // Make googleBot optional if it's not always present
}

// Define the OtherMetaTags interface
interface OtherMetaTags {
  "application-name": string;
  "mobile-web-app-capable": "yes" | "no";
  "msapplication-TileColor": string;
  "msapplication-TileImage": string;
  "apple-mobile-web-app-title": string;
  "apple-mobile-web-app-capable": "yes" | "no";
  "apple-mobile-web-app-status-bar-style": string;
}

// Define the MetaTagDataResult interface
interface MetaTagDataResult {
  authors: Author[];
  robots: Robots;
  manifest: string;
  icons: ReturnType<typeof metaTagIcons>;
  other: OtherMetaTags;
}

// -- metaTagData
const metaTagData = (): MetaTagDataResult => {
  return {
    authors: [
      {
        name: DefaultSEO.author,
      },
    ],
    robots: {
      index: DefaultSEO.robots.index,
      follow: DefaultSEO.robots.follow,
      googleBot: {
        index: DefaultSEO.robots.index,
        follow: DefaultSEO.robots.follow,
        // Ensure googleBot is defined if required
      },
    },
    manifest: DefaultSEO.manifest,
    icons: metaTagIcons(),
    other: {
      // -- android add to home screen
      "application-name": DefaultSEO.siteName,
      "mobile-web-app-capable": DefaultSEO.siteCapable ? "yes" : "no", // Ensure siteCapable exists

      // -- windows microsoft
      "msapplication-TileColor": DefaultSEO.themeColor,
      "msapplication-TileImage": `${DefaultSEO.icons.src}ms-icon-${DefaultSEO.icons.microsoft}x${DefaultSEO.icons.microsoft}.png`,

      // -- apple add to home screen
      "apple-mobile-web-app-title": DefaultSEO.siteName,
      "apple-mobile-web-app-capable": DefaultSEO.siteCapable ? "yes" : "no", // Ensure siteCapable exists
      "apple-mobile-web-app-status-bar-style": DefaultSEO.themeColor,
    },
  };
};

export default metaTagData;