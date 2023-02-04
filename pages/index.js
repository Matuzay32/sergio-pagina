import React from "react";
import Contenedor from "../components/paginaInicial/Contenedor";
import Header from "../components/paginaInicial/Header";
import Hero from "../components/paginaInicial/Hero";
import WhatsApp from "../components/ WhatsApp /WhatsApp";
import { BsWhatsapp } from "react-icons/bs";

export default function index() {
	return (
		<>
			<Contenedor>
				<Hero></Hero>
				<WhatsApp
					label={"WhatsApp"}
					href={
						"https://youtube.com/@mecual_massage6625?feature=shares"
					}>
					<BsWhatsapp />
				</WhatsApp>
			</Contenedor>
		</>
	);
}
