import  React  from 'react';
import {TextField} from '@mui/material'

const CustomField = (props: any) => {
  return (
    <div>
      <TextField
        sx={{width: '500px', padding: '10px'}}
        variant="outlined"
        label={props.label}
        onChange={props.onChange}
      />
    </div>
  )
}

export default CustomField;
