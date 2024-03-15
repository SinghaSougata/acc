import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
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

const EmailUs = props => {
  const {rbRef} = props;

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
          {'Mail'}
        </Text>

        <View
          style={{
            width: wp('90%'),
            alignSelf: 'center',
            marginTop: hp(1),
          }}>
          <Text
            style={{
              color: '#999999',
              fontSize: getFontSize(14),
              fontWeight: '700',
              fontFamily: theme.font.mulishRegular,
            }}>
            {'acc Helpdesk'}
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
            <TouchableOpacity
              >
              <Text
                style={{
                  color: theme.color.secondPrimary,
                  fontSize: getFontSize(14),
                  fontWeight: '700',
                  fontFamily: theme.font.mulishRegular,
                  textAlignVertical: 'center',
                }}
              >
                {'Raise a Query'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

export default EmailUs;
