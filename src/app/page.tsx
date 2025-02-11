// -- core
import { JSX } from "react";

// -- utils
import metaTag from "@utils/metaTag";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = metaTag.dynamic({
	page: "Home",
	link: "http://localhost:3000",
});

// ==================
// HomePage
// ==================

const HomePage = (): JSX.Element => {
	return <Home />;
};

export { metadata };
export default HomePage;
