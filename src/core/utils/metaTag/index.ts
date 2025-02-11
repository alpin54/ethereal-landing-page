// -- utils
import metaTagData from "@utils/metaTag/data";
import metaTagViewport from "@utils/metaTag/viewport";
import MetaTagDefault from "@utils/metaTag/default";
import metaTagDynamic from "@utils/metaTag/dynamic";

// -- interface
interface MetaTag {
	data: typeof metaTagData;
	viewport: typeof metaTagViewport;
	dynamic: typeof metaTagDynamic;
}

// -- metaTag
const metaTag: MetaTag = (() => {
	return {
		data: metaTagData,
		viewport: metaTagViewport,
		dynamic: metaTagDynamic,
	};
})();

export { MetaTagDefault };
export default metaTag;