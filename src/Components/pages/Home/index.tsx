import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DETAIL, INPUT } from '../../../Constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>this is Home</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(INPUT)}>
        <Text>Go to modal!</Text>
      </TouchableOpacity>
    </View>
  );
}