
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import Ads from './src/screens/Ads';
import CreateAds from './src/screens/CreateAds';
import EditScreen from './src/screens/EditScreen';

import { Provider } from 'react-redux'
import store from './src/screens/store';

export default function App() {
  const Drawer=createDrawerNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home"
  
     >
       
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Ads" component={Ads} />
      <Drawer.Screen name="Add Post" component= {CreateAds} />
      <Drawer.Screen name="Editor" component={EditScreen} />
      

    </Drawer.Navigator>
    
  </NavigationContainer>
  </Provider>

   
  );
}

export function Editor(){ 
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Editor" component={EditScreen} />
       
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
