// -- core
import { JSX } from "react";

// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- modules
import NotFound from "@modules/NotFound";

// -- metadata
const metadata = metaTag.dynamic();

// -- schemadata
const schemadata = schema.dynamic();

// ==================
// NotFoundPage
// ==================

const NotFoundPage = (): JSX.Element => {
	return <NotFound />;
};

export { metadata, schemadata };
export default NotFoundPage;
