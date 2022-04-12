import React, { useState } from 'react';
import * as UiContext from './contexts/ui';
import Routes from './routes';

export default function Apple() {
  const [applicationState, setApplicationState] = useState(UiContext.createApplicationState());
  return (
    <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
      <Routes />
    </UiContext.Context.Provider>
  );
}