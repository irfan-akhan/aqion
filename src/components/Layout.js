import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<Container maxW="container.xl" placeContent="center">
				{children}
			</Container>
			<Footer />
		</>
	);
}
