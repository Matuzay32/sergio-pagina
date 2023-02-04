import React from "react";
import Header from "./Header";

export default function Contenedor({ children }) {
	return (
		<>
			<Header></Header>
			{children}
		</>
	);
}
