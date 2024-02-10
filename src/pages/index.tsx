import { useState, useEffect } from 'react';
import axios from 'axios';
import LotteryTemplate from '@/components/templates/LotteryTemplate';
import { contractStatus } from '@/utils';
import { BetContextProvider } from '@/contexts/BetContext';

export default function Home() {
  const [contractName, setContractName] = useState({});
  const baseURL = 'http://localhost:3001';

  useEffect( ()=>{
    handleContractName();    
  }, [])

  const handleContractName = async () =>{
    const instance = axios.create({ baseURL: baseURL });
    
    await instance.get('/lottery/contract-name')
      .then(response => {
        setContractName(contractStatus.working)
      })
      .catch(error => {
        console.log(error)
        setContractName(contractStatus.notworking)
      });
  }

  const handleBet = () => {
    const player = { gambler, betValue, betAmount, address }
    if (!gambler) return
    if (!betValue) return
    if (!betAmount) return
    if (!address) return

    setPlayers((prevPlayers) => [...prevPlayers, player,]);
  };

  const handleClearPlayers = () => {
    setPlayers([])
  }

  return (
    <div>
      <BetContextProvider>
        <LotteryTemplate 
          contractName={contractName}
        />
      </BetContextProvider>
    </div>
  );
}
