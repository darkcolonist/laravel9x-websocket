import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

export default function TestNotificationButton() {

  useEffect(() => {
    
  });

  function handleButtonClick(){
    axios.get("/test")
      .then(result => {});
  }

  return (
    <Button onClick={handleButtonClick} variant="outlined">trigger SendMessage event</Button>
  );
}