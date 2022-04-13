import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

export default function HeaderLeft() {
  const { dispatch } = useNavigation();
  const onPress =  useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, [dispatch]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>open</Text>
    </TouchableOpacity>
  );
}
