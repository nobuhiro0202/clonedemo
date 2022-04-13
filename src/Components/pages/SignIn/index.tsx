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

export default function SignIn() {
  const { setApplicationState } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.AUTHORIZED)}>
        <Text>sign in</Text>
      </TouchableOpacity>
    </View>
  );
}