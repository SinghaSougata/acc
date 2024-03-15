import React, {Component, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Button} from 'react-native-elements';
import theme from './Screens/Theme';
import { VectorIcon } from './Screens/vectoricon';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  SCREENWIDTH,
  wp,
} from './Screens/responsive';

import TouchableSensitivity from './Screens/TouchableSenstivity';
import { Text } from 'react-native';
const BackBtn = props => {
  const backProps = props.backProps;
  if (backProps) {
    const {title, iconStyle, onPress, style} = backProps;
    const titleStyle = findLabelStyle(style);
    const containerStyle = findContainerStyle(style);
    const btnStyle = findButtonStyle(style);
    const color =
      iconStyle && iconStyle.color
        ? iconStyle.color
        : theme.color.secondPrimary;
    const clength = backProps.clength ? backProps.clength : 25;
    const btnTitle = props => {
      if (title && title.length > clength) {
        return title.substring(0, clength);
      }
      return title;
    };

    return (
      <Button
        type={'clear'}
        title={btnTitle()}
        onPress={() => {
          console.log('back press', onPress);
          if (typeof onPress == 'function') {
            onPress();
          } else {
            // props.navigation.pop();
          }
        }}
        iconPosition="left"
        TouchableComponent={props => (
          <TouchableSensitivity props={props}/>
        )}
        icon={
          <VectorIcon
            type={'MaterialIcons'}
            name={'arrow-back-ios'}
            size={getFontSize(18)}
            color={'#053C6D'}
         
          />
        }
        iconContainerStyle={{}}
        containerStyle={[containerStyle]}
        buttonStyle={[
          btnStyle,
          {
            paddingHorizontal:5,
            alignItems: 'center',
          },
        ]}
        titleStyle={[
          {
            color: color,
            fontSize:
              title && title.length > clength
                ? getFontSize(14)
                : getFontSize(16),
            fontFamily: theme.font.regular,
            fontWeight: '700',
          },
          titleStyle,
        ]}
        titleProps={{
          numberOfLines: 1,
        }}
      />
    );
  }
  return null;
};

const Logo = props => {
  const logoProps = props.logoProps;
  if (logoProps) {
    const {iconStyle, onPress, style} = logoProps;
    const containerStyle = findContainerStyle(style);
    const btnStyle = findButtonStyle(style);
    const color =
      iconStyle && iconStyle.color ? iconStyle.color : theme.color.accent;
    const clength = 20;

    return (
      <Button
        type={'clear'}
        onPress={() => {
          console.log('logo press', onPress);
          if (typeof onPress == 'function') {
            onPress();
          } else {
            // props.navigation.pop()
          }
        }}
        iconPosition="left"
        TouchableComponent={props => (
          <TouchableSensitivity props={props} />
        )}
        icon={
          <Text style={{marginLeft:20,color:'white',fontWeight:900}}>Thane</Text>
        }
        iconContainerStyle={{}}
        containerStyle={[containerStyle]}
        buttonStyle={[
          btnStyle,
          {
            padding: 0,
            alignItems: 'center',
          },
        ]}
      />
    );
  }
  return null;
};
const RightIcon = props => {
  const rightIconProps = props.rightIconProps;
  const {iconStyle, onPress, style} = rightIconProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={
        <VectorIcon
          type={'AntDesign'}
          name={'check'}
          size={getFontSize(18)}
          color={'#053C6D'}
        />
      }
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          alignItems: 'center',
        },
      ]}
    />
  );
};


const headerBackground = props => {
  const headerTransparent = props.headerTransparent;
  const titleImg = props.titleImage;
  const title = props.title;
  const titlePosition = props.titlePosition;
  const scrolleffect = props.scrolleffect;
  const backStyle = props.headerBackstyle;
  if (typeof headerTransparent == 'boolean' && headerTransparent) {
    return (
      <View
        style={[
          {
            width: '100%',
            height: '100%',
            backgroundColor: theme.color.transparent,
          },
          backStyle,
        ]}></View>
    );
  }
  return (
    <View
      style={[
        {
          width: '100%',
          height: '100%',
          backgroundColor: theme.color.accent,
          borderBottomWidth: 2,
          borderBottomColor: theme.color.accent,
        },
        backStyle,
        scrolleffect && {
          backgroundColor: theme.color.accent,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 8,
        },
      ]}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* {titleImg && (
          <Image
            source={require('../../assets/img/headerlog00.png')}
            style={[
              {
                width: getResWidth(100),
                height: '100%',
                alignSelf: 'center',
                resizeMode: 'contain',
              },
            ]}
          />
        )} */}
        {/* {placeTextInput()} */}
      </SafeAreaView>
    </View>
  );
};

const headerLeft = props => {
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
      }}>
      <BackBtn {...props} />
      <Logo {...props} />
    </View>
  );
};
const headerRight = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {props.rightIconProps && <RightIcon {...props} />}
      {props.quesProps && <QuestionButton {...props} />}
      {props.searchProps && <Search {...props} />}
      {props.notificationProps && <Notification {...props} />}
      {props.timelineProps && <Timeline {...props} />}
      {props.chatProps && <Chat {...props} />}
      {props.hamburgerProps && <Hamburger {...props} />}
      {props.addProps && <Add {...props} />}
      {props.dotProps && <Dot {...props} />}
      {props.shareProps && <Share {...props} />}
    </View>
  );
};

export default function NavigationBar(props) {
  console.log('333333333',props)
  const {navigation} = props;
  const style = props.style;
  const title = props.title;
  // const headerType = props.headerType;
  const headerTransparent = props.headerTransparent;
  const headerLeftContainerStyle = props.headerLeftContainerStyle;
  const headerRightContainerStyle = props.headerRightContainerStyle;

  return {
    // headerShown: props.headerShown ? props.headerShown : true,
    headerStyle: [props.headerStyle, {}],
    title: props.title ? props.title : '',
    titleStyle: {},
    headerTransparent: headerTransparent ? headerTransparent : false,
    // headerTitleStyle: headerTitleStyle(),
    headerBackground: () => headerBackground(props),
    headerLeft: () => headerLeft(props),
    headerTitleAlign: 'left',
    headerLeftContainerStyle: [
      {
        height: '100%',
        flexDirection: 'row',
        paddingLeft: wp(2.5),
      },
      headerLeftContainerStyle,
    ],
    headerRight: () => headerRight(props),
    headerRightContainerStyle: [
      {
        paddingRight: wp(2.5),
      },
      headerRightContainerStyle,
    ],
  };
}
