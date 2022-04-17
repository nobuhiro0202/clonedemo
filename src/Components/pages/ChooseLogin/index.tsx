import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIGN_IN, SIGN_UP } from '../../../Constants/path';
import { COLOR } from '../../../Constants/theme';
import { Button, Logo } from '../../atoms';

const 
  padding = 20,
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLOR.MAIN,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 40,
      paddingVertical: padding,
    },
    button: {
      marginBottom: 40,
      width: 300,
    },
  });

export default function ChooseLogin() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Logo />
      </View>
      <View style={styles.contentContainer}>
        <Button onPress={() => navigate(SIGN_IN)} style={styles.button} label='Sign in' />
        <Button onPress={() => navigate(SIGN_UP)} style={styles.button} label='Sign up' />
      </View>
    </View>
  );
}