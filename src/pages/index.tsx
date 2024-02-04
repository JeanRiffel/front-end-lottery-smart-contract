import { useState, useEffect } from 'react';
import axios from 'axios';
import LotteryTemplate from '@/components/templates/LotteryTemplate';
import { contractStatus } from '@/utils';

export default function Home() {
  const [betValue, setBetValue] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [gambler, setGambler] = useState('');
  const [address, setAddress] = useState('')
  const [contractName, setContractName] = useState({});
  const [randomNumber, setRandomNumber] = useState('');
  const [winner, setWinner] = useState('');
  const [players, setPlayers] = useState<any[]>([]);
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
      <LotteryTemplate 
        contractName={contractName}
        handleBet={handleBet}
        handleClearPlayers={handleClearPlayers}
        setGambler={setGambler}
        setBetValue={setBetValue}
        setBetAmount={setBetAmount}
        setAddress={setAddress}
        players={players}
      />
    </div>
  );
}
