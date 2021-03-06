import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DETAIL, STATISTICS } from '../../Constants/path'
import { Detail, Statistics } from '../../Components/pages';
import { HeaderLeft, headerTintColor, headerStyle } from '../Header';
import { COLOR } from '../../Constants/theme';

const 
  Stack = createStackNavigator(),
  cardStyle = {
    backgroundColor: COLOR.MAIN,
  };

function StatisticsNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName={STATISTICS} 
      screenOptions={{ 
        cardStyle,
        headerTintColor,
        headerStyle,
      }}
    >
      <Stack.Screen 
        name={STATISTICS} 
        component={Statistics}
        options={{
          headerLeft: () => <HeaderLeft />,
        }}  
      />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}

export default StatisticsNavigator;