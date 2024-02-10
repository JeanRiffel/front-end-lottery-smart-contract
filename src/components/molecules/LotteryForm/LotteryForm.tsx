import React, {useEffect, useContext} from 'react';
import CustomField from '../../atoms/customField/customField';
import CustomButton from '../../atoms/customButton/customButton';
import CustomGrid from '../../atoms/customGrid/customGrid';
import index from '../../pages/index.module.css';
import Alert from '@mui/material/Alert';
import styles from './LotteryForm.module.scss'
import BetContext from '@/contexts/BetContext'
import { Box } from '@mui/material';

const LotteryForm: React.FC = (props: any)=> {
  const { contractName } = props;

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
    setPlayers((prevPlayers) => [...prevPlayers, player,]);
  };

  const handleClearPlayers = () => {
    setPlayers([])
  };

  const renderAlert = ()=>{
    const contractStatusCode = contractName.code;
    const contractStatusMessage = contractName.message;

    return contractStatusCode === 1 ? 
      <Alert severity="success">{contractStatusMessage}</Alert> :
      <Alert severity="error">{contractStatusMessage}</Alert>;   
  }
  
  return (
    <div>      
        {renderAlert()}
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
