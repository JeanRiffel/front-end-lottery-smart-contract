import React from 'react';
import {Button, Typography} from '@mui/material'

const CustomButton = (props: any) => {
  return (
    <>
      <Button 
        sx={{width: '248px', padding: '2px'}}
        variant="contained"
        onClick={props.onClick}    
      >
        <Typography>
          {props.text}
        </Typography>
      </Button>
    </>
  )
}

export default CustomButton;