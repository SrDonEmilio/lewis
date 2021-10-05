import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Box, Button, Container, Input, ScrollView, Text } from "native-base";
import Title from "../components/Title";

const FormalCharge = () => {
	const [electronsValencia, setElectronsValencia] = useState<String>();
	const [electronsFree, setElectronsFree] = useState<String>();
	const [electronsLink, setElectronsLink] = useState<String>();
	const [result, setResult] = useState<Number | null>(null);

	const handleChangeElectronValencia = (event: any) => {
		const value = (event.target as HTMLInputElement).value;
		setElectronsValencia(value);
	};
	const handleChangeElectronFree = (event: any) => {
		const value = (event.target as HTMLInputElement).value;
		setElectronsFree(value);
	};
	const handleChangeElectronLink = (event: any) => {
		const value = (event.target as HTMLInputElement).value;
		setElectronsLink(value);
	};

	const calculate = () => {
		const result =
			Number(electronsValencia) - (Number(electronsFree) + Number(electronsLink) / 2);
		setResult(result);
	};

	return (
		<ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
			<Container style={{ display: "flex", alignItems: "center" }}>
				<Box>
					<Title>¿Qué es la Carga Formal?</Title>
					<Box>
						<Text textAlign="center" marginTop={3}>
							Es la carga que tendria un atomo sino hubiera diferencias de
							electronegatividad entre los atomos que forman un enlace. Es decir seria
							la carga que tendria el atomo si este enlace se rompiese.
						</Text>
						<Text textAlign="center" marginTop={3}>
							Dicha carga se calcula con la siguiente formula:
						</Text>
						<Text textAlign="center" marginTop={3} fontWeight="bold">
							# Electrones de valencia - (# Electrones libres + 1/2 Enlaces)
						</Text>
						<Text textAlign="center" marginTop={3}>
							Un método alternativo para obtener la carga de un átomo tomando en
							cuenta la electronegatividad es por su número de oxidación.
						</Text>
					</Box>
				</Box>
				<Box marginTop={3}>
					<Box>Introduzca los siguientes Datos</Box>
					<Box>
						<Input
							margin={2}
							placeholder="No. Electrones de Valencia"
							onChange={handleChangeElectronValencia}
						/>
						<Input
							margin={2}
							placeholder="No. Electrones Libres"
							onChange={handleChangeElectronFree}
						/>
						<Input
							margin={2}
							placeholder="No. Electrones de Enlace"
							onChange={handleChangeElectronLink}
						/>
					</Box>
					<Box>
						<Button
							rounded={10}
							backgroundColor="#189681"
							margin={2}
							onPress={calculate}
						>
							Calcular
						</Button>
					</Box>
					{result && <Text>{`La carga formal es: ${result}`}</Text>}
				</Box>
			</Container>
		</ScrollView>
	);
};

export default FormalCharge;

const styles = StyleSheet.create({});
