import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import About from "../screens/About";
import Help from "../screens/Help";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='dashboard'
      drawerContent={(props)=><CustomDrawer {...props}/>}
    >
      <Drawer.Screen name="dashboard" component={Dashboard} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="about" component={About} />
      <Drawer.Screen name="help" component={Help} />
    </Drawer.Navigator>
  )
}

export default DrawerStack