import React from "react";
import {View,Text} from "react-native";

import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"

import home from './src/pages/home'
import dig from "./src/pages/dig";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='home' 
        component={home}
        options={{
          title: "QUER SABER ONDE MORA?",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff"
        }

        }
       
        />
      
      <Stack.Screen 
        name='Seu CEP' 
        component={dig}
        />

      </Stack.Navigator>
    </NavigationContainer>
    // <Text>nmnbjkbjbj   hjhh jhg</Text>
  );
};
 