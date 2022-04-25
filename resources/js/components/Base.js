// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import SimpleNotificationWidget from './SimpleNotificationWidget';
import TestNotificationButton from './TestNotificationButton';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Base() {
  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider maxSnack={3}>
        <h1 className='text-gray-600 dark:text-gray-400'>Hello React!</h1>
        <TestNotificationButton />
        <SimpleNotificationWidget />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
  
const rootContainer = document.getElementById('hello-react');

ReactDOM.createRoot(rootContainer).render(<Base />);