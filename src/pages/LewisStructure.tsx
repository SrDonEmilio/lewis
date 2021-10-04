import React from "react";
import { StyleSheet } from "react-native";
import { Container, Box } from "native-base";

const LewisStructure = () => {
	return (
		<Container>
			<Box>Estructuras de Lewis</Box>
			<Box>Gilbert N. Lewis</Box>
			<Box>
				Nació el 23 de octubre de 1875 en Weymouth, Massachusetts , fue un fisicoquímico
				estadounidense reconocido por su trabajo en los denominados diagramas de punto o la
				llamada también estructura de Lewis y por la idea del concepto de enlace covalente y
				fotón.
			</Box>
			<Box>
				En el año 1916 realizó trabajos sobre modelos atómicos y formuló su propio modelo
				conocido como modelo del átomo cubico, proclamó la idea del enlace covalente que se
				trataba de un par de electrones compartidos en los elementos no metálicos que tienen
				de 4 a 7 electrones de valencia, en base a esa teoría inventó el término molécula
				impar que se daba cuando un electrón no era compartido, también formuló la regla del
				octeto.
			</Box>
		</Container>
	);
};

export default LewisStructure;

const styles = StyleSheet.create({});
