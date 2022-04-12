import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as UiContext from '../../../contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function ChangeStateButton(props: { state: UiContext.Status }) {
  const { setApplicationState } = useContext(UiContext.Context);
  const { state } = props;
  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text>change state to {state}</Text>
    </TouchableOpacity>
  );
}

export default function Loading() {
  return (
    <View style={styles.container}>
      <ChangeStateButton state={UiContext.Status.ANTHORIZED} />
      <ChangeStateButton state={UiContext.Status.UN_ANTHORIZED} />
      <ChangeStateButton state={UiContext.Status.FIRST_OPEN} />
    </View>
  );
}