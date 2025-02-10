// -- core
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

const truncateAddress = (address: string) => {
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const Button: React.FC = () => {
	const [connectionState, setConnectionState] = useState<string>("idle");
	const handleConnect = () => {
		setConnectionState("loading");
	};

	const handleSuccess = (address: string) => {
		setConnectionState("success");
		console.log("Connected:", truncateAddress(address));
	};

	const handleError = (error: Error) => {
		setConnectionState("error");
		console.error("Connection error:", error);
	};

	return (
		<>
			<ConnectButton
				onConnect={handleConnect}
				onSuccess={handleSuccess}
				onError={handleError}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: connectionState === "success" ? 1 : 0 }}
				transition={{ duration: 0.5 }}
			>
				{connectionState === "success" && <p>Wallet connected successfully!</p>}
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: connectionState === "error" ? 1 : 0 }}
				transition={{ duration: 0.5 }}
			>
				{connectionState === "error" && (
					<p>Error connecting wallet. Please try again.</p>
				)}
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: connectionState === "loading" ? 1 : 0 }}
				transition={{ duration: 0.5 }}
			>
				{connectionState === "loading" && <p>Connecting...</p>}
			</motion.div>
		</>
	);
};

export default Button;
