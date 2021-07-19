/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import HomeScreen from './src/HomeScreen';
import ChapterScreen from './src/ChapterScreen';
import { screenOptions } from './assets/styles';
import { RootStackParamList } from './src/components/NavigatorType';

const Stack = createStackNavigator<RootStackParamList>();

const client = new ApolloClient({
  uri: 'https://api.graphql.guide/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'The GraphQL Guide' }}
          />
          <Stack.Screen name="Chapter" component={ChapterScreen} />
        </Stack.Navigator>
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
