import {
    View,
    Text,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
  } from 'react-native';
  import React, {useState} from 'react';
  import {
    getFontSize,
    getResHeight,
    getResWidth,
    hp,
    SCREENWIDTH,
    wp,
  } from './responsive';
  import theme from './Theme';
  import { VectorIcon } from './vectoricon';
  const {width, height} = Dimensions.get('screen');
  
  const TrendingCard = ({trendingData,onEndReached}) => {
    const [likedIds, setLikedIds] = useState([]); 
    const toggleLike = (id) => {
      if (likedIds.includes(id)) {
        setLikedIds(likedIds.filter((itemId) => itemId !== id));
      } else {
        setLikedIds([...likedIds, id]);
      }
    };
    return (
      <>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trendingData}
          contentContainerStyle={{
            paddingHorizontal: getResWidth(17),
          }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: getResWidth(10),
              }}></View>
          )}
          renderItem={({index, item}) => {
            const isLiked = likedIds.includes(item.id);
            return (
              <View
                style={{
                  width: SCREENWIDTH / 1.5,
                  backgroundColor: '#FCFCFC',
                  borderRadius: getResWidth(14),
                  flexDirection: 'row',
                  marginBottom: 15,
                  paddingTop:getResHeight(10),
                  paddingRight:getResWidth(10),
                  paddingBottom:getResHeight(6),
                  paddingLeft:getResWidth(10)
                }}
                key={item.id}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap:7,
                      justifyContent:'space-between',
                      marginHorizontal: getResWidth(9),
                    }}>
                     <View>
                      <Text
                        style={{
                          color: '#000000',
                          fontFamily: theme.font.mulishRegular,
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: getFontSize(10),
                          flex: 1,
                          flexWrap: 'wrap',
                          textAlignVertical: 'center',
                        }}>
                        {item.category}
                      </Text>
                      </View>
                      <View>
                      <Text
                        style={{
                          color: '#000000',
                          fontFamily: theme.font.mulishRegular,
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: getFontSize(10),
                          // marginLeft: getResWidth(10),
                          flex: 1,
                          flexWrap: 'wrap',
                          textAlignVertical: 'center',
                        }}>
                        {'$' +item.price}
                      </Text>
                      </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}>
                       <ImageBackground
                       style={styles.icon2Style}
              source={{ uri: item.image }}
              resizeMode="cover"
            >
                <Image
                        resizeMode="contain"
                        style={styles.icon2Style}
                        source={{ uri: item.image }}
                      />
            </ImageBackground>
                    {item && item.type == 'text' && (
                      <View
                        style={
                          {
                            borderColor: '#E4E4E4',
                            borderWidth: 1,
                            borderRadius: getResWidth(5),
                            width:  getResWidth(185),
                            height: getResHeight(150),
                      
                          }
                        }>
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            alignSelf: 'center',
                            marginTop: getResHeight(5),
                            paddingHorizontal: getResWidth(12),
                            paddingVertical: getResHeight(10),
                          }}>
                          <Text
                           numberOfLines={8} 
                           ellipsizeMode="tail" 
                            style={{
                              color: '#5C5C5C',
                              fontWeight: '400',
                              fontFamily: theme.font.mulishRegular,
                              fontSize: getFontSize(12),
                            }}>
                            {item.caption}
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      marginTop: getResHeight(10),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: getResWidth(9),
                      alignItems: 'center',
                      width:getResWidth(160),
                      marginBottom:getResHeight(10)
                    }}>
                    <Text
                      style={{
                        fontWeight: '400',
                        color: '#999999',
                        fontSize: getFontSize(10),
                        fontFamily: theme.font.mulishRegular,
                        width:getResWidth(140)
                      }}>
                      {item.details}
                    </Text>
                    <TouchableOpacity onPress={() => toggleLike(item.id)}>
                        <VectorIcon
                          type={'Entypo'}
                          name={isLiked ? 'heart' : 'heart-outlined'}
                          size={getFontSize(20)}
                          style={{
                            color: isLiked ? theme.color.secondPrimary : '#535353',
                          }}
                        />
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </>
    );
  };
  
  export default TrendingCard;
  
  const styles = StyleSheet.create({
    icon2Style: {
      width: getResWidth(185),
      height: getResHeight(150),
      borderRadius: getResWidth(5),
      alignSelf: 'center',
      marginTop: getResHeight(5),
      
    },
  });
  