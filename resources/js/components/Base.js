// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import SimpleNotificationWidget from './SimpleNotificationWidget';
import TestNotificationButton from './TestNotificationButton';

export default function Base() {
  return (
    <SnackbarProvider maxSnack={3}>
      <h1 className='text-gray-600 dark:text-gray-400'>Hello React!</h1>
      <TestNotificationButton />
      <SimpleNotificationWidget />
    </SnackbarProvider>
  );
}
  
const rootContainer = document.getElementById('hello-react');

ReactDOM.createRoot(rootContainer).render(<Base />);