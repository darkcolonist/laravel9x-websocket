import React, { useEffect } from 'react';

export default function SimpleNotificationWidget() {

  useEffect(() => {
    window.Echo.channel('global-notifications')
      .listen('.UserEvent', (data) => {
        // $("#broadcast").append('<div class="alert alert-success">' + i + '.' + data.title + '</div>');
        console.log(data)
      });

    return () => {
      window.Echo.leave('global-notifications');
    };
  });

  return (
    <div className='text-gray-600 dark:text-gray-400'>i am simple notification provider</div>
  );
}