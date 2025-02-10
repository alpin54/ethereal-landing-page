"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// -- style
import "@rainbow-me/rainbowkit/styles.css";

// -- organisms
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";

// -- interface
interface TemplateProps {
	children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
	const [config, setConfig] = useState<ReturnType<
		typeof getDefaultConfig
	> | null>(null);
	const queryClient = new QueryClient();

	useEffect(() => {
		const defaultConfig = getDefaultConfig({
			appName: "Ethereal Landing Page",
			projectId: "aaece944a85823603cbc4529c73bc888",
			chains: [mainnet, polygon, optimism, arbitrum, base],
			ssr: false,
		});
		setConfig(defaultConfig);
	}, []);

	if (!config) {
		return null;
	}

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider>
						<Header />
						<main className="main">{children}</main>
						<Footer />
					</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</ThemeProvider>
	);
};

export default Template;
