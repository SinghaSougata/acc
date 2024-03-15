import {View, Text} from 'react-native';
import React from 'react';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  wp,
} from './responsive';
import theme from './Theme';

const TitleBtnComponent = props => {
  return (
    <View
      style={{
        width: wp('90%'),
        flexDirection: 'row',
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        paddingLeft: getResWidth(2),
      }}>
      <Text
        style={{
          flex: 1,
          color: '#053C6D',
          fontSize: getFontSize(16),
          fontWeight: '600',
          fontFamily: theme.font.mulishSemiBold,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default TitleBtnComponent;
