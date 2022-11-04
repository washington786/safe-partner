import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import Dashboard from "../screens/Dashboard";
import DrawerStack from "./DrawerStack";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='auth'
    >
      <Stack.Screen name="auth" component={AuthStack} />
      <Stack.Screen name="drawer" component={DrawerStack} />
    </Stack.Navigator>
  )
}

export default MainStack