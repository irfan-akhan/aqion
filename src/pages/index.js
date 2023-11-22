import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Pitch from "@/components/Pitch";
import CTC from "@/components/CTC";
import CaseStudies from "@/components/CaseStudies";
import Partner from "@/components/Partner";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Aqion Tech</title>
				<meta
					name="description"
					content="Aqion Technologies building software solution for the web"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<main>
					<Hero />
					<Pitch />
					<CaseStudies />
					<Partner />
					<CTC />
				</main>
			</Layout>
		</>
	);
}
