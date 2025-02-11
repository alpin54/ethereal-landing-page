// -- config
import DefaultSEO from "@configs/SEO";

interface Viewport {
	width: string;
	initialScale: number;
	userScalable: boolean;
}

interface MetaTagViewportResult extends Viewport {
	themeColor: string;
}

// -- metaTagViewport
const metaTagViewport = (): MetaTagViewportResult => {
	return {
		...DefaultSEO.viewport,
		themeColor: DefaultSEO.themeColor,
	};
};

export default metaTagViewport;