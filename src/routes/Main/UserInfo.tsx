import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_INFO } from "../../Constants/path";
import { UserInfo } from "../../Components/pages";
import { HeaderLeft } from '../Header';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator initialRouteName={USER_INFO}>
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