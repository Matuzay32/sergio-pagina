import React from "react";
import Contenedor from "../components/paginaInicial/Contenedor";
import Header from "../components/paginaInicial/Header";
import Hero from "../components/paginaInicial/Hero";

export default function index() {
	return (
		<>
			<Contenedor>
				<Hero></Hero>
			</Contenedor>
		</>
	);
}
