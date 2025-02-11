// -- config
import DefaultSEO from "@configs/SEO";

// -- interface
import { IMetaTagViewportResult } from "./type";

// -- metaTagViewport
const metaTagViewport = (): IMetaTagViewportResult => {
	return {
		...DefaultSEO.viewport,
		themeColor: DefaultSEO.themeColor,
	};
};

export default metaTagViewport;