import React, { useCallback } from "react";
import { Alert, Image, Linking, StyleSheet } from "react-native";
import { Box, Button, Container, ScrollView, Text } from "native-base";
import Title from "../components/Title";

const OpenURLButton = ({ url, children }: any) => {
	const handlePress = useCallback(async () => {
		// Checking if the link is supported for links with custom URL scheme.
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			// Opening the link with some app, if the URL scheme is "http" the web link should be opened
			// by some browser in the mobile
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	return <Button backgroundColor="transparent" children={children} onPress={handlePress} />;
};

const About = () => {
	return (
		<ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
			<Container style={{ display: "flex", alignItems: "center", height: "100%" }}>
				<Title>Acerca de</Title>
				<Box>
					<Image
						source={require("../assets/images/logo.png")}
						style={{ width: 200, height: 150 }}
						resizeMode="contain"
					/>
				</Box>
				<Box>
					<Text>
						<Text fontWeight="bold">"La Química Formal"</Text> es un proyecto
						estudiantil de la Universidad Nacional Autónoma de México que busca
						facilitar la comprensión de temas relacionados con la Química.
					</Text>
				</Box>
				<Box>
					Lewis es la primera App de este proyecto y su objetivo es ayudar al estudiante a
					calcular y comprender de una mejor manera las estructuras de Lewis, así como la
					geometría molecular.
				</Box>
				<Box position="absolute" bottom={10}>
					<Text>
						<OpenURLButton url={"https://github.com/SrDonEmilio"}>
							<Text color="rgb(12, 11, 11)">by @SrDonEmilio</Text>
						</OpenURLButton>
					</Text>
				</Box>
			</Container>
		</ScrollView>
	);
};

export default About;

const styles = StyleSheet.create({});
