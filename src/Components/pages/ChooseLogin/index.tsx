import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIGN_IN, SIGN_UP } from '../../../Constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ChooseLogin() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>this is ChooseLogin</Text>
      <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
        <Text>Go to sign in </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
        <Text>Go to sign up</Text>
      </TouchableOpacity>
    </View>
  );
}