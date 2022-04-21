// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleNotificationWidget from './SimpleNotificationWidget';

export default function Base() {
  return (
    <React.Fragment>
      <h1 className='text-gray-600 dark:text-gray-400'>Hello React!</h1>
      <SimpleNotificationWidget />
    </React.Fragment>
  );
}
  
const rootContainer = document.getElementById('hello-react');

ReactDOM.createRoot(rootContainer).render(<Base />);