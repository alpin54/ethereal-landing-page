// -- core
import { JSX } from "react";

// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = metaTag.dynamic();

// -- schemadata
const schemadata = schema.dynamic();

// ==================
// HomePage
// ==================

const HomePage = (): JSX.Element => {
	return <Home />;
};

export { metadata, schemadata };
export default HomePage;
