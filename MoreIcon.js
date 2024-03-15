import {
    Text,
    View,
    Dimensions,
    FlatList,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import {
    getFontSize,
    getResHeight,
    getResWidth,
    hp,
    wp,
  } from './responsive';
  import theme from './Theme';
  const {width, height} = Dimensions.get('screen');
  
  const MoreIcon = ({title, data, onPress, showRenderBorder, style}) => {
    return (
      <View
        style={{
          width: wp('90%'),
          backgroundColor: '#FFFFFF',
          borderRadius: getResWidth(20),
          marginTop: hp('1.5%'),
          marginBottom: hp('1%'),
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: getResHeight(10),
        }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: getFontSize(18),
            fontWeight: '600',
            color: '#053C6D',
            marginLeft: getResWidth(17),
            marginVertical: getResHeight(10),
            fontFamily: theme.font.mulishSemiBold,
          }}>
          {title}
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          numColumns={3}
          data={data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => onPress(item.id)}
                key={item.id}
                style={[
                  {
                    width: wp('90%') / 3,
                    alignItems: 'center',
                    marginVertical: getResHeight(12),
                    paddingHorizontal: getResWidth(9),
                    paddingVertical: getResHeight(5),
                    justifyContent: 'space-evenly',
                  },
                  style,
                ]}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: getResWidth(42.52), //42.52
                    height: getResWidth(42.52),
                    marginBottom: getResHeight(8),
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    color: '#053C6D',
                    fontFamily: theme.font.mulishSemiBold,
                    fontSize: getFontSize(10),
                    width:getResWidth(98),
                    alignItems: 'center',
                    fontWeight: 600
                  }}>
                  {item.description}
                </Text>
                {showRenderBorder && (
                  <View
                    style={{
                      width: '98%',
                      height: getResHeight(1.5),
                      backgroundColor: 'rgba(5, 60, 109, 0.06)',
                      marginTop: getResHeight(8),
                    }}
                  />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  export default MoreIcon;
  