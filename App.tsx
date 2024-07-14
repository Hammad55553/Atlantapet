import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, useColorScheme, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home/Home';
import Walk from './src/screens/Home/walk/Walk';
import Start from './src/screens/transport/start';

export type RootStackParamList = {
  Home: undefined;
  Walk: undefined;
  Start: undefined;
};
 
const Stack = createNativeStackNavigator<RootStackParamList>();

const CustomHeaderRight = () => {
  return (
    <TouchableOpacity onPress={() => { }} style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <Icon name="gift" size={16} color="#00cc99" />
      </View>
      <Text style={styles.buttonText}>
        Earn$$$
      </Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ statusBarColor: '#00cc99', headerStyle: { backgroundColor: '#fff' }, headerTintColor: '#00cc99', headerTitleAlign: 'left' }}>
        <Stack.Screen
          name="Home" component={Home} options={({ navigation }) => ({
            headerShown: true, title: 'Atlanta Pet Transport', headerLeft: () => (
              <TouchableOpacity onPress={() => { }}>
                <Icon name="menu" size={24} color="#00cc99" style={{ marginHorizontal: 15 }} />
              </TouchableOpacity>
            ),
            headerRight: () => <CustomHeaderRight />,
          })}
        />
        <Stack.Screen name="Walk" component={Walk} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: 'transparent' }, headerTransparent: true, }} />
        <Stack.Screen name="Start" component={Start} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: 'transparent' }, headerTransparent: true, }} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#00cc99',
    borderColor: '#00cc99',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 3,
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 3,
  },
});

export default App;
