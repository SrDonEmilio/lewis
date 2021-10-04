import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Drawer from "./src/navigation/Drawer";

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NativeBaseProvider>
				<NavigationContainer>
					<Drawer />
				</NavigationContainer>
			</NativeBaseProvider>
		</>
	);
}
