// -- core
import { JSX } from "react";

// -- utils
import metaTag from "@utils/metaTag";

// -- modules
import NotFound from "@modules/NotFound";

// -- metadata
const metadata = metaTag.dynamic({
	page: "Page Not Found",
});

// ==================
// NotFoundPage
// ==================

const NotFoundPage = (): JSX.Element => {
	return <NotFound />;
};

export { metadata };
export default NotFoundPage;
