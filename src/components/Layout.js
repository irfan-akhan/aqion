import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<Box mt="10vh">{children}</Box>
			<Footer />
		</>
	);
}
