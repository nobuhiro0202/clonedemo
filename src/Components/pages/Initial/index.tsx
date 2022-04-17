import React, { useCallback, useContext, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import CarouselStatic from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Carousel } from '../../organisms';
import { Pagination } from 'react-native-snap-carousel';
import { Context, Status } from '../../../contexts/ui';
import { COLOR } from '../../../Constants/theme';

const 
  padding = 20,
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding,
      backgroundColor: COLOR.MAIN,
    },
    text: {
      color: COLOR.WHITE,
    }
  });

interface Data {
  text: string;
}

const renderData = [
  {
    text: 'my name is john',
  },
  {
    text: 'lorem ipsum is no longer',
  },
  {
    text: 'gaeruhidowkpl;,fzsdvfxgk',
  },
  {
    text: 'my newgauiofjwhipgjahwoefjgwean',
  },
];

export default function Initial() {
  const 
    [activeSlide, changeSlide] = useState(0),
    { setApplicationState } = useContext(Context),
    carouselRef = useRef(null),
    onEnd = useCallback(() => {
      setApplicationState(Status.UN_AUTHORIZED);
    }, [setApplicationState]),
    onNext = useCallback(() => {
      const nextIndex = activeSlide === renderData.length - 1 ? activeSlide : 1 + activeSlide;
      setTimeout(() => {
        if (!carouselRef || !carouselRef.current) {
          return;
        }
        const carousel = (carouselRef.current as any) as CarouselStatic<Data>;
        carousel.snapToItem(nextIndex);
      }, 250)
    }, [activeSlide]);
    
  return (
    <SafeAreaView style={styles.container}>
      <Carousel data={renderData} onEnd={onEnd} onNext={onNext} carouselRef={carouselRef} onSnapToItem={changeSlide} />
      <Pagination length={renderData.length} index={activeSlide} />
    </SafeAreaView>
  );
}