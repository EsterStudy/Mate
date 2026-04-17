import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import   from "./src/screens/ ";
import   from "./src/screens/ ";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen key={" "} name={" "} component={ } />
			<Stack.Screen key={" "} name={" "} component={ } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;