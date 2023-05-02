import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

const SplashScreen = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthNavigation');
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/image/splash.png')}
        style={{width: 150, height: 150, resizeMode: 'contain'}}
      />
      <Text> ini SplashScreen </Text>
    </View>
  );
};
export default SplashScreen;
