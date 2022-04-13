// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom/client';

export default function HelloReact() {
  return (
    <h1 className='text-gray-600 dark:text-gray-400'>Hello React!</h1>
  );
}
  
const rootContainer = document.getElementById('hello-react');

ReactDOM.createRoot(rootContainer).render(<HelloReact />);