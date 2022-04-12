import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context, Status } from '../../../contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function UserInfo() {
  const { setApplicationState } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text>UserInfo</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.UN_ANTHORIZED)}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}