import "react-native-gesture-handler";

import { TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import IndexScreen from "./src/screens/IndexScreen";
import CreateContactsScreen from "./src/screens/CreateScreen";
import DetailScreen from "./src/screens/DetailScreen";
import EditContactsScreen from "./src/screens/EditScreen";

import store from "./src/redux/store/store";

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaView style={{ flex: 1 }}>
					<Stack.Navigator
						initialRouteName="MyContact"
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen
							name="MyContact"
							component={IndexScreen}
							options={{ title: "My Contacts" }}
						/>
						<Stack.Screen
							name="CreateContact"
							component={CreateContactsScreen}
							options={{ title: "Create Contact" }}
						/>
						<Stack.Screen name="Details" component={DetailScreen} />
						<Stack.Screen
							name="Edit"
							component={EditContactsScreen}
							options={{ title: "Edit Contact" }}
						/>
					</Stack.Navigator>
				</SafeAreaView>
			</NavigationContainer>
		</Provider>
	);
}
