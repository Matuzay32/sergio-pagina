import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import WhatsApp from "../ WhatsApp /WhatsApp";
import { BsWhatsapp } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

export default function Contenedor({ children }) {
	return (
		<Box pos={"relative"}>
			<Header></Header>
			{children}

			<Footer></Footer>
		</Box>
	);
}
