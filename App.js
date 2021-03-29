import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Lesson} from './screen/Lesson';
import {Detail} from './screen/Detail';


export default function App(route, navigation) {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Lesson'
          component={Lesson}
          options={{ title: 'Lesson' }}
          />
        <Stack.Screen
        name = "Detail"
        component = {Detail}
        options = {{title: "Chi Tiết"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
} 
