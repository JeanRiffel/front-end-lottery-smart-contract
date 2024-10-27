import React, { useState } from 'react';
import CustomField from '../../atoms/customField/customField';
import CustomButton from '../../atoms/customButton/customButton';
import axios from 'axios'
import styles from './LotteryForm.module.scss'
import { Box } from '@mui/material';

interface Player {
  address: string;
  value: number;
}

const LotteryForm: React.FC = (props: any)=> {
  const [playersList, setPlayersList] = useState<Player[]>([])
  const [betValue, setBetValue] = useState<number>(0)
  const [accountAddress, setAccountAddress] = useState<string>('')

  const handleBetValue = (e: React.ChangeEvent<HTMLInputElement>) => setBetValue(Number(e.target.value))
  const handleBetAddress = (e: React.ChangeEvent<HTMLInputElement>) => setAccountAddress(e.target.value)
  
  const handlePlayer = ()=> {
    const newPlayer: Player = {
      address: accountAddress,
      value: betValue,
    }
    setPlayersList([...playersList, newPlayer]);
    console.log(playersList)
  }
 
  const placeBet = async () => {
    let payload: Player[] = [];
    playersList.forEach( (player) => {
      payload.push({
        address: player.address, 
        value: player.value } )
    })
    
    await axios.post('http://localhost:3001/lottery/place-bet', {
        data: payload,
    })
    
  }

  const getWinner = async () => {
    await axios.get('http://localhost:3001/lottery/winner');
  }

  return (
    <div>      
      <Box className={styles.lotteryForm__fields}>
        <CustomField 
          label="Account Address"          
          onChange={handleBetAddress}
        />
        <CustomField 
          label="Bet Value" 
          onChange={handleBetValue}
        />
      </Box>
      <Box className={styles.lotteryForm__buttons}>
        <CustomButton
          onClick={handlePlayer}
          text='Add Player'
        />          
        <CustomButton
          text='Clear Players'
        />
        <CustomButton          
          text='Place Bet'
          onClick={placeBet}
        />
        <CustomButton
          text='Get Winner'
          onClick={getWinner}
        />
      </Box>
    </div>
  )  
}

export default LotteryForm;
