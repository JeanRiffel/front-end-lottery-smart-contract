import React from 'react';
import LotteryForm from '../molecules/LotteryForm/LotteryForm';
import CustomButton from '../atoms/customButton/customButton';

const LotteryOrganism = (props:any) => {  
  return (
    <div>
      <LotteryForm 
        props={props}
      />
      <CustomButton
        onClick={()=>{}}
        text='Get Winner'
      />
    </div>
  ) 
}

export default LotteryOrganism;