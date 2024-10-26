import React, {useEffect, useState, useContext} from 'react';
import CustomField from '../../atoms/customField/customField';
import CustomButton from '../../atoms/customButton/customButton';
import CustomGrid from '../../atoms/customGrid/customGrid';
import index from '../../pages/index.module.css';
import axios from 'axios'

import styles from './LotteryForm.module.scss'
import { Box } from '@mui/material';

interface Player {
  address: string;
  value: number;
  
}

const LotteryForm: React.FC = (props: any)=> {

  const [players, setPlayers] = useState<Player[]>([])
  const [betValue, setBetValue] = useState<number>(0)
  const [betAddress, setBetAddress] = useState<string>('')
  const [winner, setWinner] = useState<string>('')

  const handleBetValue = (e: React.ChangeEvent<HTMLInputElement>) => setBetValue(Number(e.target.value))
  const handleBetAddress = (e: React.ChangeEvent<HTMLInputElement>) => setBetAddress(e.target.value)
  const handlePlayer = ()=> {
    const newPlayer: Player = {
      address: betAddress,
      value: betValue,
    }

    setPlayers([...players, newPlayer]);
  }
  

  const placeBet = async () => {
      const inputData: Player[] = 
        [
          { 
            address: "0xd57Ec36C833ae69Ba18f63AFB23707B7D43cF68C",
            value: 4
          },
          {
            address: "0xD3E0cdE4f7BE2e559D64e24950044C2BD1c998cd",
            value: 5
          }
        ]
      

      const response = await axios.post('http://localhost:3001/lottery/place-bet', {
        data: inputData,
      });
      console.log(response.data);
  }


  const getWinner = async () => {
  
      const response = await axios.get('http://localhost:3001/lottery/winner'); 
      console.log(response.data);

  }


  return (
    <div>      
        <Box className={styles.lotteryForm__fields}>
          <CustomField 
            label="Bet Value" 
            onChange={handleBetValue}
          />            
          <CustomField 
            label="Account Address"          
            onChange={handleBetAddress}
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
