import {Text, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  getResWidth,
  getResHeight,
  getFontSize,
  wp,
  hp,
  SCREENWIDTH,
} from './responsive';
import theme from './Theme';


function makeCall(phoneNo) {
    try {
      console.log('callNumber ----> ', phoneNo);
      if (Platform.OS === 'android') {
        phoneNo = `tel:${phoneNo}`;
        return Linking.openURL(phoneNo);
      } else {
        phoneNo = `telprompt:${phoneNo}`;
      }
      Linking.canOpenURL(phoneNo)
        .then(supported => {
          console.log('support', supported);
          if (!supported) {
            Alert.alert('Phone number is not available');
          } else {
            return Linking.openURL(phoneNo);
          }
        })
        .catch(err => console.log('Type pf err', err));
    } catch (error) {
      console.log(' mail error ', error);
    }
  }

const ContactUs = props => {

  const {rbRef} = props
  return (
    <>
      <RBSheet
        ref={rbRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.8)',
          },
          draggableIcon: {
            backgroundColor: '#D9D9D9',
          },
          container: {
            borderTopLeftRadius: getResWidth(16),
            borderTopRightRadius: getResWidth(16),
            backgroundColor: '#FFFFFF',
          },
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: getFontSize(16),
            fontWeight: '700',
            fontFamily: theme.font.mulishRegular,
            color: '#053C6D',
          }}>
          {'Contact Us'}
        </Text>
        <View
          style={{
            width: wp('90%'),
            alignSelf: 'center',
            marginTop: hp(1),
          }}>
            </View>
         
          <Text
            style={{
              color: '#999999',
              fontSize: getFontSize(16),
              fontWeight: '700',
              fontFamily: theme.font.mulishRegular,
              marginTop: hp(0.8),
            }}>
            {`Call @acc`}
          </Text>
          <Text
            style={{
              color: '#EB5800',
              fontSize: getFontSize(14),
              fontWeight: '700',
              fontFamily: theme.font.mulishRegular,
              // marginTop: hp(0.8),
            }}>
            {`Timing: 9 AM to 5 PM `
              }
          </Text>
          <View
            style={{
              backgroundColor: '#F2F2F2',
              marginTop: hp(0.8),
              paddingVertical: hp(1),
              paddingLeft: wp(1.2),
              borderColor: '#F2F2F2',
              borderWidth: 1,
              borderRadius: getResWidth(5),
            }}>
            <Text
              style={{
                color: theme.color.secondPrimary,
                fontSize: getFontSize(14),
                fontWeight: '700',
                fontFamily: theme.font.mulishRegular,
                textAlignVertical: 'center',
              }}
              onPress={() => {
                makeCall('9833789646');
              }}>
              {'9833789646'}
            </Text>
          </View>
      </RBSheet>
    </>
  );
};

export default ContactUs;
