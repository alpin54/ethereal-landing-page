"use client";

// -- core
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
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
		<NextThemesProvider {...props}>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider>{children}</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</NextThemesProvider>
	);
}
