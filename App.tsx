import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Boarding from "./src/components/Auth/Boarding";

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
    return(
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Boarding" component={Boarding} />
    </AuthStack.Navigator>
    )
}
export default function App() {
  return (
      <NavigationContainer>
          <AuthNavigator />
      </NavigationContainer>
  );
}
