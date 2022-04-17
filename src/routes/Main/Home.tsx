import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DETAIL, HOME, INPUT } from '../../Constants/path'
import { Detail, Home, Input } from '../../Components/pages';
import { HeaderLeft, headerTintColor, headerStyle } from '../Header';
import { COLOR } from '../../Constants/theme';

const 
  Stack = createStackNavigator(),
  cardStyle = {
    backgroundColor: COLOR.MAIN,
  };

function HomeNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName={HOME} 
      screenOptions={{ 
        cardStyle,
        headerTintColor,
        headerStyle,
      }}
    >
      <Stack.Group>
        <Stack.Screen 
          name={HOME} 
          component={Home}
          options={{
            headerLeft: () => <HeaderLeft />,
          }} 
        />
        <Stack.Screen name={DETAIL} component={Detail} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={INPUT} component={Input} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default HomeNavigator;