import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/home/HomeScreen';
import MatchScreen from './screens/match/MetchScreen';
import ChatScreen from './screens/chat/ChatScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import AccountScreen from './screens/account/AccountScreen';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Header from './screens/chat/Header';

const tabNavigation = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name="burn" size={23} color={tintColor} />,
    },
  },
  Match: {
    screen: MatchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <SimpleLineIcon name="heart" size={23} color={tintColor} />,
    },
  },
  Favorites: {
    screen: MatchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <SimpleLineIcon name="star" size={23} color={tintColor} />,
    },
  }
}, {
  activeColor: 'rgb(83, 40, 130)',
  inactiveColor: "rgb(200,200,200)",
  barStyle: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: "rgba(100,100,100,0.05)",
  },
  labeled: false,
  style: { backgroundColor: "#fff" },
  theme: { colors: { background: "#fff" } },
  initialRouteName: "Home"
});

const stackNavigation = createStackNavigator({
  Tab: {
    screen: tabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      header: null
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      header: <Header />
    }
  }
},{
  initialRouteName: "Tab"
});

export default createAppContainer(stackNavigation);