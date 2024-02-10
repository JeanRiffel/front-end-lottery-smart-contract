import React from 'react';
import LotteryForm from '../molecules/LotteryForm/LotteryForm';
import CustomButton from '../atoms/customButton/customButton';

const LotteryOrganism = (props: any) => { 
  const { contractName } = props; 
  
  return (
    <div>
      <LotteryForm 
        contractName={contractName}
      />
      <CustomButton
        onClick={()=>{}}
        text='Get Winner'
      />
    </div>
  ) 
}

export default LotteryOrganism;
