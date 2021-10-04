import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Stack from "./src/navigation/Stack";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NativeBaseProvider>
				<NavigationContainer>
					<Stack />
				</NavigationContainer>
			</NativeBaseProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
});
