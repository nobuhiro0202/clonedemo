import React, { useContext } from 'react';
import Button from '../../atoms/Button';
import { Context, Status } from '../../../contexts/ui';
export default function SignInWithGoogle() {
  const { setApplicationState } = useContext(Context);
  return <Button 
      onPress={() => setApplicationState(Status.AUTHORIZED)}
      icon='google'
      label='Sign In with Google'
    />;
}