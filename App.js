import "react-native-gesture-handler";

import { TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "./src/screens/IndexScreen";
import CreateContactsScreen from "./src/screens/CreateScreen";
import DetailScreen from "./src/screens/DetailScreen";
import EditContactsScreen from "./src/screens/EditScreen";
import { Provider as ContactsProvider } from "./src/context/ContactContext";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				<ContactsProvider>
					<Stack.Navigator initialRouteName="MyContact">
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
						/>
					</Stack.Navigator>
				</ContactsProvider>
			</SafeAreaView>
		</NavigationContainer>
	);
}
