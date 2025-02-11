// -- organisms
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";
import ThemeButton from "@atoms/ThemeButton";

// -- interface
interface TemplateProps {
	children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="main">
				{children}
				<ThemeButton />
			</main>
			<Footer />
		</>
	);
};

export default Template;
