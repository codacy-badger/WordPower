import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app-navigator';
import LoadDatabaseScreen from '../screens/LoadDatabase';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';
import {getDbExistsAsync} from '../service/LocalStorage';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isDBExists, setDBExists] = useState(undefined);

  useEffect(() => {
    (async () => {
      let status = await getDbExistsAsync();
      setDBExists(status);
    })();
  }, []);

  if (isDBExists === undefined) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isDBExists ? 'AppNavigator' : 'LoadDatabase'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        <Stack.Screen name="LoadDatabase" component={LoadDatabaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
