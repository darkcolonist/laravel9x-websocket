import { Button, TextField, Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { Fragment, useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Slide from '@mui/material/Slide';

export default function SubscribeToChannelWidget() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [customChannel,setCustomChannel] = useState("custom");

  useEffect(() => {
    window.Echo.channel(customChannel)
      .listen('.UserEvent', (eventData) => {
        // $("#broadcast").append('<div class="alert alert-success">' + i + '.' + eventData.title + '</div>');
        enqueueSnackbar(
          <></>
          , {
            content:
              <Alert severity='warning' variant='outlined'>
                <AlertTitle>{eventData.title}</AlertTitle>
                {eventData.data.date}: {eventData.data.message}
              </Alert>,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            TransitionComponent: Slide,
          });
      });

    return () => {
      window.Echo.leave(customChannel);
    }
  }, [ customChannel ]);

  function handleSubscribeClick(){
    axios.get("/test/custom?channel="+customChannel)
      .then(result => {});
  }

  return (
    <Fragment>
      <div>
        <TextField variant="outlined" onChange={e => setCustomChannel(e.target.value)} defaultValue={customChannel} label="channel"></TextField>
        <Button onClick={handleSubscribeClick} variant="outlined">subscribe</Button>
      </div>
    </Fragment>
  );
}