import { extendTheme, ChakraProvider } from "@chakra-ui/react";
const customeTheme = extendTheme({
	fonts: {
		heading: "Rubik",
		body: "Rubik",
	},
});
export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customeTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
