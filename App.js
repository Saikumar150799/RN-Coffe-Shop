import BottomNavigation from "./src/navigation/BottomNavigation";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import CoffeeDetailsScreen from "./src/screens/CoffeeDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name="CoffeeDetails" component={CoffeeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
