import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as UiContext from '../../../contexts/ui';
import { COLOR } from '../../../Constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.MAIN,
  },
  text: {
    color: COLOR.WHITE,
  }
});

function ChangeStateButton(props: { state: UiContext.Status }) {
  const { setApplicationState } = useContext(UiContext.Context);
  const { state } = props;
  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text style={styles.text}>change state to {state}</Text>
    </TouchableOpacity>
  );
}

export default function Loading() {
  return (
    <View style={styles.container}>
      <ChangeStateButton state={UiContext.Status.AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.UN_AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.FIRST_OPEN} />
    </View>
  );
}