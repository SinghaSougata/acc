import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {
    getFontSize,
    getResHeight,
    getResWidth,
    hp,
    SCREENWIDTH,
    wp,
  } from './responsive';
  import { ImageComponent } from './mediaComponent';
  import { screenNavigate } from '../RootNavigation';
  
  function PosterCard(props) {
    const {item,apiData2,cover} = props;
    
    return (
      <TouchableOpacity
     
        style={[
          {
            width: wp('90%'),
            height: hp(25),
            overflow: 'hidden',
            borderRadius: getResWidth(22),
          },
        ]
      }
        onPress={()=>
          screenNavigate('Products',{apiData2})
        }
        >
        <ImageBackground
          source={{
            uri: item?.image
              ? item?.image
              : '',
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            flex: 1,
            borderRadius: getResWidth(22),
            overflow: 'hidden',
          }}
          blurRadius={70}>
          <ImageComponent
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              resizeMode: cover ? 'cover' : 'contain',
            }}
            url={
              item?.image?item.image: ''
            }
          />
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  export default PosterCard;
  
  const styles = StyleSheet.create({
    icon2Style: {
      width: getResWidth(80),
      height: getResHeight(30),
      marginLeft: getResWidth(16),
      marginTop: getResWidth(9),
    },
  });
  