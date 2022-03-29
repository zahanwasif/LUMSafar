import React from 'react';
import { Text, HStack, Switch, Center, useColorMode, NativeBaseProvider } from 'native-base';
import { SignUp, AccountType } from './screens/SignUp';
import { Login } from './screens/Login';
import { theme, config } from './themes/Theme';
import { useFonts, Jost_300Light, Jost_500Medium, Jost_700Bold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'NativeBase:' ]);

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
	let [ fontsLoaded ] = useFonts({
		Jost_300Light,
		Jost_500Medium,
		Jost_700Bold
	});

	return fontsLoaded ? (
		<NativeBaseProvider config={config} theme={theme}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
					<Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
					<Stack.Screen options={{ headerShown: false }} name="SignUpStart" component={AccountType} />
					{/* <Login /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	) : (
		<AppLoading />
	);
}

// Color Switch Component
function ToggleDarkMode() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack space={2} alignItems="center">
			<Text>Dark</Text>
			<Switch
				isChecked={colorMode === 'light'}
				onToggle={toggleColorMode}
				aria-label={colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'}
			/>
			<Text>Light</Text>
		</HStack>
	);
}