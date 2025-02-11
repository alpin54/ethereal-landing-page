// -- tag manager
import { GoogleAnalytics } from "@next/third-parties/google";

// -- style
import "@rainbow-me/rainbowkit/styles.css";
import "@styles/app.scss";

// -- organisms
import { ThemeProvider } from "@organisms/ThemeProvider";

// -- utils
import metaTag, { MetaTagDefault } from "@utils/metaTag";
import { SchemaDefault } from "@utils/schema";

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

				{/* -- THE TAG MANAGER -- */}
				<GoogleAnalytics gaId="G-CX3GXSHJFB" />
			</head>

			{/* -- THE BODY -- */}
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<SchemaDefault />
			</body>
		</html>
	);
};

export { metadata, viewport };
export default RootLayout;
