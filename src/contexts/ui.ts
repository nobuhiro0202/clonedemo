import React, { createContext } from 'react';

export enum Status {
  LOADING = 'loading',
  FIRST_OPEN = 'firstOpen',
  UN_AUTHORIZED = 'unAuthorized',
  AUTHORIZED = 'authorized',
}

export function createApplicationState(): Status {
  return Status.LOADING;
}

export const Context = createContext({
  applicationState: createApplicationState(),
  setApplicationState: (_: Status) => {},
});