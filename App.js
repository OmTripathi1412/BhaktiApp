import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Avatar} from 'react-native-paper';
import AuthScreen from './src/views/AuthScreen/AuthScreen';
import LoginScreen from './src/views/LoginScreen/LoginScreen';
import MobileLoginScreen from './src/views/LoginScreen/MobileLoginScreen';
import OTPScreen from './src/views/LoginScreen/OTPScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#7d0424',
            },
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
            },
          })}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#7d0424',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 24,
            },
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: 'MobileLoginScreen',
            headerLeft: null,
            headerRight: null,
          })}
        />
        <Stack.Screen
          name="MobileLoginScreen"
          component={MobileLoginScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#7d0424',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 24,
            },
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: 'MobileLoginScreen',
            headerLeft: null,
            headerRight: null,
          })}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#7d0424',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 24,
            },
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: 'MobileLoginScreen',
            headerLeft: null,
            headerRight: null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
