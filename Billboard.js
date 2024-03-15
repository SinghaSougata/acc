import {View, Text, FlatList, Dimensions} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import theme from './Theme';
import {
  SCREENWIDTH,
  getResHeight,
  getResWidth,
  wp,
} from './responsive';
import PosterCard from './PosterCard';

const Dot = React.memo(({isActive}) => (
  <View
    style={{
      width: isActive ? getResWidth(15) : getResWidth(5),
      height: getResWidth(5),
      borderRadius: getResWidth(5) / 2,
      backgroundColor: isActive
        ? theme.color.primary
        : 'rgba(231, 120, 23, 0.3)',
      margin: 4,
    }}
  />
));

export default function BillBoard(props) {
  const { billboardList, onPress,navigation,apiData } = props;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderDotIndicator = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {billboardList.map((_, index) => (
          <Dot key={index} isActive={index === currentIndex} />
        ))}
      </View>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % billboardList.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex });
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, billboardList]);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  return (
    <>
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={billboardList}
        pagingEnabled
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        style={{
          width: wp('90%'),
          marginTop: '2%',
        }}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item, index }) => (
          <PosterCard
            item={item}
            index={index}
            onPress={onPress}
            apiData={billboardList}
            apiData2={apiData}
            fromPage={'billBoard'}
            navigation={navigation}
            style={{
              height: getResHeight(150),
            }}
          />
        )}
      />
      <View
        style={{
          maxWidth: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: getResHeight(3),
        }}>
        {renderDotIndicator()}
      </View>
    </>
  );
}