import React, { useEffect } from 'react';
import { Animated, StatusBar, Text, View } from 'react-native';
import { getResWidth,getResHeight } from './src/Navigation/Screens/responsive';;
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import { SCREENWIDTH,SCREENHEIGHT } from './src/Navigation/Screens/responsive';
import theme from './src/Navigation/Screens/Theme';


function AnimatedSlash(): React.JSX.Element {
  const width = new Animated.Value(0);
  const height = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(
      width, 
      {
        toValue: getResWidth(150), 
        duration: 1800,
        useNativeDriver: false,
      },
    ).start(); 
    Animated.timing(
      height,
      {
        toValue: getResHeight(60), 
        duration: 1800, 
        useNativeDriver: false,
      },
    ).start(); 
  }, []);

  return (
    <Animated.View
      style={{
       
        width: width,
        height: height,

      }}
    >
      <Text style={{color:'white',
        fontSize:50,
        textAlign:'center',
        fontWeight:900}}>
    acc
    </Text>
    </Animated.View>
  );
}
function App(): React.JSX.Element {
  return (
    <>
        <View
          style={{
            width: SCREENWIDTH,
            height: SCREENHEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1F5DAD',
            position: 'absolute',
          }}>
          <AnimatedSlash />
        </View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent={true}
        backgroundColor={theme.color.transparent}
      />
        
            <NavigationContainer>
                <StackNavigation/>
            </NavigationContainer>
        
      </>
  )
}

export default App;
