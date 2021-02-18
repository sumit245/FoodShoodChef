import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import DetailStack from './Components/DetailStack'
import AccountStack from './Components/AccountStack'
import SubscriptionStack from './Components/SubscriptionStack';
import NotificationStack from './Components/NotificationStack';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#00ccff"
        inactiveColor="tomato"
        inactiveTintColor='black'
        labeled={false}
        shifting={true}
        barStyle={{ backgroundColor: 'white',justifyContent:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5}}
      >
        <Tab.Screen
          name="Feed"
          component={DetailStack}
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name='home-sharp' color={color} selectionColor={'red'} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationStack}
          options={{
            tabBarBadge:3,
            tabBarIcon: ({ color }) => (
                <Icon name='notifications-circle' color={color} selectionColor={'red'} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Subscriptions"
          component={SubscriptionStack}
          options={{
            tabBarLabel: 'Subscriptions',
            tabBarIcon: ({ color }) => (
                <Icon name='list-circle' color={color} selectionColor={'red'} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
                <Icon name='person-circle' color={color} selectionColor={'red'} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
export default class HomeScreen extends Component {
    render() {
        return (
        <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        )
    }
}
