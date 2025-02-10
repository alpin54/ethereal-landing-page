// -- utils
import metaTag, { MetaTagDefault } from "@utils/metaTag";
import { SchemaDefault } from "@utils/schema";

// -- style
import "@styles/app.scss";

// -- metadata
const metadata = metaTag.data();

// -- viewport
const viewport = metaTag.viewport();

// -- interface
interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			{/* -- THE HEAD -- */}
			<head>
				{/* -- THE META TAG -- */}
				<MetaTagDefault />
			</head>

			{/* -- THE BODY -- */}
			<body>
				{children}
				<SchemaDefault />
			</body>
		</html>
	);
};

export { metadata, viewport };
export default RootLayout;
