import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigator, navigationRef} from './utils';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigator.navigate('second')}>
        <Text>Second Screen</Text>
      </Pressable>
    </View>
  );
};

const SecondScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Second Screen</Text>
      <Pressable onPress={() => navigator.goBack()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
