import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './../screens/Register/index';
import Login from './../screens/Login/index';
import Home from './../screens/Home/index';
import Forgot from './../screens/Forgot/index';


const Stack = createNativeStackNavigator();

const RouteNav = () => {
  return (
    <NavigationContainer scr>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        {/* <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Forgot" component={Forgot} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouteNav