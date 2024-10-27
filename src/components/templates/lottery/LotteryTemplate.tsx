import React from "react";
import LotteryOrganism from "../../organisms/LotteryOrganism";

const LotteryTemplate = (props: any) => {
  const { contractName } = props;
  
  return (
    <div>
      <LotteryOrganism 
        contractName={contractName}
      />
    </div>
  )
}

export default LotteryTemplate;
