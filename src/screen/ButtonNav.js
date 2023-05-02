import * as React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      height: 60,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const imageIcon = label === 'Home' ? 
        require('../assets/icon/Home_ic.png')
              : require('../assets/icon/Profile_ic.png');

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', }}
          >
            <Image source={imageIcon}  style={{height: 20, width: 20,}} />
            <Text style={{
              color: isFocused ? '#2E3283' : '#5B5B5B',
              fontSize: 16,
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function ButtonNav() {
  return (
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          headerShown: false
        }} />
      </Tab.Navigator>

  );
}



