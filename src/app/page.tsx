// -- core
import { JSX } from "react";

// -- utils
import metaTag from "@utils/metaTag";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = metaTag.dynamic({
	link: "https://ethereal-landing-page.vercel.app",
});

// ==================
// HomePage
// ==================

const HomePage = (): JSX.Element => {
	return <Home />;
};

export { metadata };
export default HomePage;
