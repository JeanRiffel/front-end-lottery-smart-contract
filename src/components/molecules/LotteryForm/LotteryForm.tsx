import React, {useEffect, useContext} from 'react';
import CustomField from '../../atoms/customField/customField';
import CustomButton from '../../atoms/customButton/customButton';
import CustomGrid from '../../atoms/customGrid/customGrid';
import index from '../../pages/index.module.css';

import styles from './LotteryForm.module.scss'
import BetContext from '@/contexts/BetContext'
import { Box } from '@mui/material';

const LotteryForm: React.FC = (props: any)=> {

  const { 
    gambler, setGambler, 
    betValue, setBetValue, 
    betAmount, setBetAmount,
    address, setAddress,
    players, setPlayers
  } = useContext(BetContext);

  const handleChangeGambler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGambler(e.target.value);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBetValue(e.target.value);
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBetAmount(e.target.value);
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleBet = () => {
    const player = { gambler, betValue, betAmount, address }
    
    if (!gambler || !betValue || !betAmount || !address) return
    
    setPlayers((prevPlayers) => [...prevPlayers, player,]);
  };

  const handleClearPlayers = () => {
    setPlayers([])
  };

  
  return (
    <div>      
        <Box className={styles.lotteryForm__fields}>
          <CustomField 
            label="Gambler" 
            onChange={handleChangeGambler} 
          />  
          <CustomField 
            label="Bet Value" 
            onChange={handleChangeValue}
          />                  
          <CustomField 
            label="Bet Amount"          
            onChange={handleChangeAmount}
          />
          <CustomField 
            label="Account Address"          
            onChange={handleChangeAddress}
          />          
        </Box>
        <Box className={styles.lotteryForm__buttons}>
          <CustomButton
            onClick={handleBet}
            text='Place Bet'
          />          
          <CustomButton
            onClick={handleClearPlayers}
            text='Clear Players'
          />
        </Box>      
        <Box className={styles.lotteryForm__grid}>
          <CustomGrid players={players}/>
        </Box>
    </div>
  )  
}

export default LotteryForm;
