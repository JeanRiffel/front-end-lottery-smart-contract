import React from 'react';
import {Button} from '@mui/material'

const CustomButton = (props: any) => {
  return (
    <Button 
      sx={{width: '248px', padding: '2px'}}
      variant="contained"
      onClick={props.onClick}    
    >
      {props.text}
    </Button>
  )
}

export default CustomButton;