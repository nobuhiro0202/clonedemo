import React, { useContext } from 'react';
import {
  createStackNavigator,
  StackCardInterpolationProps
} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  INITIAL, 
  LOADING, 
  HOME, 
  CHOOSE_LOGIN, 
  STATISTICS,
  USER_INFO,
  SIGN_IN,
  SIGN_UP
} from '../../Constants/path';
import { Initial, Loading, ChooseLogin, SignIn, SignUp } from '../../Components/pages';
import Home from './Home';
import Statistics from './Statistics';
import UserInfo from './UserInfo';
import * as UiContext from '../../contexts/ui';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const 
Stack = createStackNavigator(),
ChooseLoginStack = createStackNavigator(),
Tab = createBottomTabNavigator(),
HomeDrawer = createDrawerNavigator(),
StatisticsDrawer = createDrawerNavigator();

const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress
  }
});

const getActiveRouteName = (route: any): string => {
  return getFocusedRouteNameFromRoute(route) === 'USER_INFO' ? 'none' : 'flex';
}

function HomeWithDrawer() {
  return (
    <HomeDrawer.Navigator initialRouteName={HOME}>
      <HomeDrawer.Screen 
        name={HOME} 
        component={Home} 
        options={{ headerShown: false }}
      />
      <HomeDrawer.Screen 
        name={USER_INFO} 
        component={UserInfo}
        options={{ headerShown: false }} 
      />
    </HomeDrawer.Navigator>
  );
}

function StatisticsWithDrawer() {
  return (
    <StatisticsDrawer.Navigator initialRouteName={STATISTICS}>
      <StatisticsDrawer.Screen 
        name={STATISTICS} 
        component={Statistics} 
        options={{ headerShown: false }}
      />
      <StatisticsDrawer.Screen 
        name={USER_INFO} 
        component={UserInfo}
        options={{ headerShown: false }} 
      />
    </StatisticsDrawer.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator 
      initialRouteName={HOME} 
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen 
        name={HOME} 
        component={HomeWithDrawer}
        options={({ route }) => ({ 
            headerShown: false,
            tabBarStyle: {
              display: getActiveRouteName(route)
            },
        })}
      />
      <Tab.Screen 
        name={STATISTICS} 
        component={StatisticsWithDrawer}
        options={({ route }) => ({ 
          headerShown: false,
          tabBarStyle: {
            display: getActiveRouteName(route)
          },
        })}
      />
    </Tab.Navigator>
  );
}

function ChooseLoginNavigator() {
  return (
    <ChooseLoginStack.Navigator initialRouteName={CHOOSE_LOGIN}>
      <ChooseLoginStack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />
      <ChooseLoginStack.Screen name={SIGN_IN} component={SignIn} />
      <ChooseLoginStack.Screen name={SIGN_UP} component={SignUp} />
    </ChooseLoginStack.Navigator>
  );
}


function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen 
               name={CHOOSE_LOGIN} 
               component={ChooseLoginNavigator} 
               options={{ headerShown: false }} 
             />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen 
               name={HOME} 
               component={TabRoutes} 
               options={{ headerShown: false }}
             />;
    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen 
               name={INITIAL} 
               component={Initial} 
               options={{ headerShown: false}} 
             />;
  }
}

function AuthWithRoutes() {
  const uiContext = useContext(UiContext.Context);
  return (
    <Stack.Navigator 
      initialRouteName={LOADING}
      screenOptions={{
        cardStyleInterpolator: forFade,
      }}
    >
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
}

export default AuthWithRoutes;