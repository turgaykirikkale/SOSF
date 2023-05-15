/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import WalletScreen from './src/Screens/WalletScreen';
import SettingScreen from './src/Screens/SettingScreen';
import ReferenceScreen from './src/Screens/ReferenceScreen';
import GameHistoryScreen from './src/Screens/GameHistoryScreen';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const Entrypoint = props => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
          <Stack.Screen name={'WalletScreen'} component={WalletScreen} />
          <Stack.Screen name={'SettingScreen'} component={SettingScreen} />
          <Stack.Screen name={'ReferenceScreen'} component={ReferenceScreen} />
          <Stack.Screen
            name={'GameHistoryScreen'}
            component={GameHistoryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Entrypoint />
    </SafeAreaProvider>
  );
}

export default App;
