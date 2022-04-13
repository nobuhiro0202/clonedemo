import React, { useContext } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
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
  USER_INFO
} from '../../Constants/path';
import { Initial, Loading, ChooseLogin } from '../../Components/pages';
import Home from './Home';
import Statistics from './Statistics';
import UserInfo from './UserInfo';
import * as UiContext from '../../contexts/ui';
import { RotateInUpLeft, SlideOutLeft } from 'react-native-reanimated';
import { Route } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();
const StatisticsDrawer = createDrawerNavigator();

// const forFade = ({ current, next }: StackCardInterpolationProps) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: { opacity },
//     rightButtonStyle: { opacity },
//     titleStyle: { opacity },
//     backgroundStyle: { opacity },
//   };
// };

const getActiveRouteName = (state: any): string => {
  if (!state || !state.routes) {
    return '';
  }
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return RotateInUpLeft.name;
}

function HomeWithDrawer() {
  return (
    <HomeDrawer.Navigator initialRouteName={HOME}>
      <HomeDrawer.Screen 
        name={HOME} 
        component={Home} 
        options={{ headerShown: false }}
      />
      <HomeDrawer.Screen name={USER_INFO} component={UserInfo} />
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
      <StatisticsDrawer.Screen name={USER_INFO} component={UserInfo} />
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
        options={{ headerShown: false }}
        />
      <Tab.Screen 
        name={STATISTICS} 
        component={StatisticsWithDrawer}
        options={{ headerShown: false }}
        />
    </Tab.Navigator>
  );
}

function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_ANTHORIZED:
      return <Stack.Screen 
               name={CHOOSE_LOGIN} 
               component={ChooseLogin} 
               options={{ headerShown: false }} 
             />;
    case UiContext.Status.ANTHORIZED:
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
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
}

export default AuthWithRoutes;