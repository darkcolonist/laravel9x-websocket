import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import Slide from '@mui/material/Slide';

export default function SimpleNotificationWidget() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    window.Echo.channel('global-notifications')
    .listen('.UserEvent', (eventData) => {
      // $("#broadcast").append('<div class="alert alert-success">' + i + '.' + eventData.title + '</div>');
      enqueueSnackbar(
        <React.Fragment>
          <strong>{eventData.title}</strong>
          {eventData.data.date}: {eventData.data.hash}
        </React.Fragment>
        , {
          variant: "info",
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          TransitionComponent: Slide,
        });
        // console.log(eventData)
      });

    return () => {
      window.Echo.leave('global-notifications');
    };
  });

  return (
    <div className='text-gray-600 dark:text-gray-400'>i am simple notification provider</div>
  );
}