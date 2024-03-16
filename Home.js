import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MoreIcon from './MoreIcon';
import TitleBtnComponent from './Title';
import TrendingCard from './TrendingCard';
import {
  getFontSize,
  getResWidth,
  getResHeight,
  SCREENHEIGHT,
  SCREENWIDTH,
  hp,
  wp,
} from './responsive';

import theme from './Theme';
import EmailUs from './Email';
import ContactUs from './Contact';
import BillBoard from './Billboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationBar from '../NavigationHeader';
import { assets } from '../../assets';

const transacData = [
  {
    id: 1,
    image: assets.p1,
    description: 'Mobile',
  },
  {
    id: 2,
    image: assets.p2,
    description: 'Game',
  },
  {
    id: 3,
    image: assets.p3,
    description: 'Furniture',
  },
  {
    id: 4,
    image: assets.p4,
    description: 'Appliances',
  },
  {
    id: 5,
    image: assets.p5,
    description: 'Piggy',
  },
  {
    id: 6,
    image: assets.p6,
    description: 'Clothing',
  },
  {
    id: 7,
    image: assets.p7,
    description: 'Moisturizers',
  },
  {
    id: 8,
    image: assets.p8,
    description: 'Masks',
  },
  {
    id: 9,
    image: assets.p9,
    description: 'Exfoliators',
  },
  {
    id: 10,
    image: assets.p10,
    description: 'Serums',
  },
  {
    id: 11,
    image: assets.p11,
    description: 'Beauty',
  },
  {
    id: 12,
    image: assets.p12,
    description: 'Dog beds',
  },
  {
    id: 13,
    image: assets.p13,
    description: 'Home textiles',

  },
  {
    id: 14,
    image: assets.p14,
    description: 'Jewelery',

  },
  {
    id: 16,
    image: assets.p16,
    description: 'Skincare',
   
  },
  {
    id: 17,
    image: assets.p17,
    description: 'Events',

  },
  {
    id: 18,
    image: assets.p18,
    description: 'Outerwear',

  },
  
  {
    id: 19,
    image: assets.p19,
    description: 'Cleaning',
  },
  {
    id: 20,
    image: assets.p20,
    description: 'Beauty',
  },
  {
    id: 21,
    image: assets.p21,
    description: 'Choclate',
  },
];
const shareData = [
  {
    id: 1,
    image: assets.telephone,
    description: 'Contact',
  },
  {
    id: 2,
    image: assets.Mail,
    description: 'Mail',
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollViewRef = React.createRef();
    this.state = {
      viewAll: false,
      showModal: false,
      contactModalShow: false,
      emailModalShow: false,
      userDetails: null,
      iconData: [],
      isLoading: false,
      offSet: 0,
      currentOffsetPost: 0,
      selectedTab: 0,
      hasClickedHome: false,
      scrollY: 0,
      productData:[],
      data: [],
      loading: true,
      error: null,
      liked:false
    };
  }
  fetchData = async () => {
    console.log('Fetching data...');
    try {
      const response = await fetch('https://www.jsonkeeper.com/b/2B80');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      await AsyncStorage.setItem('productData', JSON.stringify(data.products)); 
      this.setState({ productData: data.products });
      console.log('Data fetched successfully:', this.state.productData);
    } catch (error) {
      console.log('Error fetching data:', error);
      console.log('Attempting to retrieve data from AsyncStorage...');
      try {
        const offlineData = await AsyncStorage.getItem('productData');
        if (offlineData !== null) {
          console.log('Offline data retrieved successfully:', offlineData);
          this.setState({ productData: JSON.parse(offlineData) });
        } else {
          console.log('No offline data available.');
        }
      } catch (storageError) {
        console.log('Error retrieving offline data:', storageError);
      }
    } finally {
      this.setState({ loading: false });
    }
  }
  async componentDidMount() {
    this.fetchData()
    this.props.navigation.setOptions(
      NavigationBar({
        headerTransparent: true,
        logoProps: {
          onPress: () => this.props.navigation.navigate('Home'),
        },
        timelineProps: {
          iconStyle: {
            color: theme.color.accent,
          },
        },
      }),
    )
  }
  getRandomItems = (arr, n) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };
 
  render() {
    const randomItems = this.getRandomItems(this.state.productData, 5);
    const flatlistData = () => {
      let arr = [...transacData];
      if (
        arr &&
        arr.length <= 3
      ) {
        return arr;
      }
      if (this.state.viewAll) {
        let obj = {
          id: 30,
          image: assets.viewless,
          description: 'View Less',
        };
        arr.push(obj);
      } else {
        arr = arr.slice(0, 5);
        let obj = {
          id: 30,
          image: assets.viewmore,
          description: 'View More',
        };
        arr.push(obj);
      }
      return arr;
    };
    return (
      <>
        <ContactUs
          rbRef={ref => {
            this.contactRef = ref;
          }}
        />
        <EmailUs
          rbRef={ref => {
            this.emailRef = ref;
          }}
        />
 
        <View
          style={{
            flex: 1,
            width: SCREENWIDTH,
            backgroundColor: theme.color.accent,
          }}>
          <LinearGradient
            colors={['#0B477E', '#053C6D']}
            style={{
              width: '100%',
            }}>
            <SafeAreaView />
            <View style={styles.lgradient} />
          </LinearGradient>
          <View
            style={{
              flex: 1,
              marginTop: getResHeight(-33),
              borderTopLeftRadius: getResWidth(28),
              borderTopRightRadius: getResWidth(28),
              overflow: 'hidden',
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                flex: 1,
                backgroundColor: '#EBF0F3',
                borderTopLeftRadius: getResWidth(28),
                borderTopRightRadius: getResWidth(28),
                width: wp('100%'),
                alignSelf: 'center',
              }}>
              <View style={styles.subContainer2}>
                  <>
                    <BillBoard
                      billboardList={randomItems}
                      apiData={this.state.productData}
                    />
                  </>
                <>
                    <MoreIcon
                      title={'Shop for'}
                      data={flatlistData()}
                      showRenderBorder
                      onPress={item => {
                        switch (item) {
                          case 30:
                            this.setState({viewAll: !this.state.viewAll});
                            break;
                        }
                      }}
                    />
                </>       
                    <>
                      <TitleBtnComponent
                        title="Trending Posts"
                      />
                      <TrendingCard
                        trendingData={
                         this.state.productData
                        }
                      />
                    </> 
                <>
                   <MoreIcon
                    title={'Contact Us'}
                    data={shareData}
                    onPress={item => {
                      switch (item) {
                        case 1:
                          this.contactRef.open();
                          break;
                        case 2:
                          this.emailRef.open();
                          break;
                        default:
                          break;
                      }
                    }}
                    style={{
                      width: wp('90%') / 2,
                      alignItems: 'center',
                      paddingHorizontal: 0,
                      marginVertical: getResHeight(12),
                      paddingVertical: getResHeight(5),
                    }}
                  /> 
                </>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  lgradient: {
    width: SCREENWIDTH,
    height: Platform.OS == 'ios' ? getResHeight(74) : getResHeight(125),
  },
  subContainer1: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    alignItems: 'center',
  },
  store1: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },
  store2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-around',
  },
  icon1Style: {
    width: 20,
    height: 20,
    alignItems: 'center',
  },
  subContainer2: {
    backgroundColor: '#EBF0F3',
    borderTopLeftRadius: getResWidth(28),
    borderTopRightRadius: getResWidth(28),
    alignItems: 'center',
    marginTop: hp('1.5%'),
  },
});
