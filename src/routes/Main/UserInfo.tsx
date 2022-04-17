import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_INFO } from "../../Constants/path";
import { UserInfo } from "../../Components/pages";
import { HeaderLeft, headerTintColor, headerStyle } from '../Header';
import { COLOR } from '../../Constants/theme';

const 
  Stack = createStackNavigator(),
  cardStyle = {
    backgroundColor: COLOR.MAIN,
  };

export default function() {
  return (
    <Stack.Navigator 
      initialRouteName={USER_INFO}
      screenOptions={{ 
        cardStyle,
        headerTintColor,
        headerStyle,
      }}
    >
      <Stack.Screen 
        name={USER_INFO} 
        component={UserInfo}
        options={{
          headerLeft: () => <HeaderLeft />
        }}
      />
    </Stack.Navigator>
  );
}