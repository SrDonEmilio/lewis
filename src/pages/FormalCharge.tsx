import React from "react";
import { StyleSheet } from "react-native";
import { Box, Button, Container, Input } from "native-base";

const FormalCharge = () => {
	return (
		<Container>
			<Box>
				<Box>¿Qué es la Carga Formal?</Box>
				<Box>
					Es la carga que tendria un atomo sino hubiera diferencias de electronegatividad
					entre los atomos que forman un enlace. Es decir seria la carga que tendria el
					atomo si este enlace se rompiese.
				</Box>
				<Box>Dicha carga se calcula con la siguiente formula:</Box>
				<Box># Electrones de valencia - (# Electrones libres + 1/2 Enlaces)</Box>
				<Box>
					Un método alternativo para obtener la carga de un átomo tomando en cuenta la
					electronegatividad es por su número de oxidación.
				</Box>
			</Box>
			<Box>
				<Box>Carga Formal</Box>
				<Box>Introduzca los siguientes Datos</Box>
                <Box>
                    <Input placeholder="No. Electrones de Valencia" />
                    <Input placeholder="No. Electrones Libres" />
                    <Input placeholder="No. Electrones de Enlace" />
                </Box>
                <Box>
                    <Button>Calcular</Button>
                </Box>
			</Box>
		</Container>
	);
};

export default FormalCharge;

const styles = StyleSheet.create({});
