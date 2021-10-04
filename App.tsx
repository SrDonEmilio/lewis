import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from 'native-base';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NativeBaseProvider>
				<Box>Hello world</Box>
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
