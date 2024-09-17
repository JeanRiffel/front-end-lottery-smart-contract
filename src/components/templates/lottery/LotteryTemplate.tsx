import React from "react";
import LotteryOrganism from "../../organisms/LotteryOrganism";
import Header from "../header/Header";

const LotteryTemplate = (props: any) => {
  const { contractName } = props;
  
  return (
    <div>
      <Header />
      <LotteryOrganism 
        contractName={contractName}
      />
    </div>
  )
}

export default LotteryTemplate;
