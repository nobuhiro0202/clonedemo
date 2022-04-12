import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DETAIL, HOME } from '../../Constants/path'
import { Detail, Home } from '../../Components/pages';
import { HeaderLeft } from '../Header';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={HOME} >
      <Stack.Screen 
        name={HOME} 
        component={Home}
        options={{
          headerLeft: () => <HeaderLeft />,
        }} 
      />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;