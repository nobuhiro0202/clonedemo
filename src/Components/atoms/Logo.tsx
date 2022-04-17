import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, ImageStyle }from 'react-native';
import { width } from '../../lib/window';
import reactImage from '../../../assets/favicon.png';

const 
  edgeNumber = 2,
  ratio = 3,
  imageRatio = edgeNumber / ratio,
  styles = StyleSheet.create({
    image: {
      width: width * imageRatio,
      flex: 1,
      resizeMode: 'contain',
    },
  });

interface Props {
  image?: ImageSourcePropType;
  style?: ImageStyle | ImageStyle[];
};

export default function Logo(props: Props) {
  const { image = reactImage, style } = props;
  return <Image source={image} resizeMode='contain' style={[styles.image, style]} />;
}