import React from 'react';
import { NetworkContextProvider } from './hooks/useNetwork';
import { Users } from './components/Users';

export default function App() {
  return (
    <NetworkContextProvider>
      <Users />
    </NetworkContextProvider>
  );
}
