import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import WhatsApp from "../ WhatsApp /WhatsApp";
import { FaYoutube } from "react-icons/fa";

export default function Contenedor({ children }) {
	return (
		<>
			<Header></Header>
			{children}

			<WhatsApp
				label={"YouTube"}
				href={
					"https://youtube.com/@mecual_massage6625?feature=shares"
				}>
				<FaYoutube />
			</WhatsApp>
			<Footer></Footer>
		</>
	);
}
