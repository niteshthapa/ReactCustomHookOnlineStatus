import React from 'react';
import useStatus from './hooks/useStatus';
export default function App() {
  const isOnline = useStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
