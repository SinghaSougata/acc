import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    Alert,
    ActivityIndicator,
  } from 'react-native';
  import React, { Component } from 'react';
  import theme from './Theme';
  import {
    getFontSize,
    getResHeight,
    getResWidth,
    hp,
    wp,
  } from './responsive';
  import NavigationBar from '../NavigationHeader';
  import { ImageComponent } from './mediaComponent';
  
  const { width } = Dimensions.get('screen');
  class Products extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        counts: {},
      };
    }
    decrementCount = (id) => {
      const { counts } = this.state;
      if (counts[id] && counts[id] > 0) {
        this.setState((prevState) => ({
          counts: { ...prevState.counts, [id]: prevState.counts[id] - 1 },
        }));
      }
    };
    incrementCount = (id) => {
      this.setState((prevState) => ({
        counts: { ...prevState.counts, [id]: (prevState.counts[id] || 0) + 1 },
      }));
    };
    async componentDidMount() {
      this.focusListener = this.props.navigation.addListener('focus', () => {
  
      });
      this.props.navigation.setOptions(
        NavigationBar({
          backProps: {
            title: 'Products',
            onPress: () => this.props.navigation.navigate('Home'),
          },
        }),
      );
  
    }
  
    render() {
      const { route } = this.props;
      const { apiData2 } = route.params;
      const { counts } = this.state;
  
      return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {this.state.isLoading == true ? (
            <ActivityIndicator
              size={getFontSize(22)}
              color={theme.color.secondPrimary}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: hp(30),
                marginBottom: hp(1),
              }}
            />
          ) : (
            <>
              <FlatList
                numColumns={2}
                data={
                  apiData2 ? apiData2 : []
                }
                style={{}}
                contentContainerStyle={{
                  paddingVertical: 8,
                  alignItems: 'flex-start',
                  alignSelf: 'center',
                }}
                renderItem={({ item }) => {
                  const itemId = item.id;
                  return (
                    <View
                      style={{
                        // backgroundColor: 'red',
                        width: width / 2.1,
                        alignItems: 'center',
                        marginBottom: hp(2),
                      }}>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: 'white',
                          width: '93%',
                          borderRadius: 15,
                          padding: 13,
                          elevation: 3,
                        }}>
                        <ImageComponent
                          url={item.image}
                          style={{
                            height: 130,
                            width: '100%',
                            borderRadius: 10,
                          }}
                          resizeMode={'cover'}
                        />
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              marginTop: 5,
                              fontSize: getFontSize(12),
                              fontFamily: theme.font.mulishBold,
                              fontWeight: '700',
                              color: theme.color.primary,
                            }}>
                            {item.category}
                          </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              marginTop: 5,
                              fontSize: getFontSize(12),
                              fontFamily: theme.font.mulishBold,
                              fontWeight: '700',
                              color: theme.color.primary,
                            }}>
                            {'$' + item.price}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 5,
                            justifyContent: 'space-between',
                            marginVertical: 2,
                            backgroundColor: '#053C6D',
                            borderColor: '#053C6D',
                            borderWidth: 1,
                            alignItems: 'center',
                            borderRadius: 6,
                            paddingVertical: getResHeight(2),
                            paddingHorizontal: getResWidth(10)
                          }}>
                          <TouchableOpacity onPress={() => this.decrementCount(itemId)}>
                            <Text style={{ fontSize: 20, marginRight: 10, color: 'white' }}>-</Text>
                          </TouchableOpacity>
                          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: 10 }}>{counts[itemId] || 'Add'}</Text>
                          <TouchableOpacity onPress={() => this.incrementCount(itemId)}>
                            <Text style={{ fontSize: 20, marginLeft: 10, color: 'white' }}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
  
            </>
          )}
        </View>
      );
    }
  }
  export default Products;
  