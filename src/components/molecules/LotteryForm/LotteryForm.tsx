import React, {useEffect} from 'react';
import CustomTitle from '../atoms/customTitle/customTitle';
import CustomField from '../../atoms/customField/customField';
import CustomButton from '../../atoms/customButton/customButton';
import CustomGrid from '../../atoms/customGrid/customGrid';
import index from '../../pages/index.module.css';
import { Box } from '@mui/material'
import Alert from '@mui/material/Alert';
import styles from './LotteryForm.module.scss'

const LotteryForm = (props)=> {

  const renderAlert = ()=>{
    const contractStatusCode = props.props.props.contractName.code;
    const contractStatusMessage = props.props.props.contractName.message;

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
          onChange={(e)=> props.props.props.setGambler(e.target.value)} 
        />  
        <CustomField 
          label="Bet Value" 
          onChange={(e)=> props.props.props.setBetValue(e.target.value)}
        />                  
        <CustomField 
          label="Bet Amount"          
          onChange={(e)=> props.props.props.setBetAmount(e.target.value)}
        />
        <CustomField 
          label="Account Address"          
          onChange={(e)=> props.props.props.setAddress(e.target.value)}
        />          
      </Box>
      <Box className={styles.lotteryForm__buttons}>
        <CustomButton
          onClick={props.props.props.handleBet}
          text='Place Bet'
        />          
        <CustomButton
          onClick={props.props.props.handleClearPlayers}
          text='Clear Players'
        />
      </Box>      
      <Box className={styles.lotteryForm__grid}>
        <CustomGrid players={props.props.props.players}/>
      </Box>
    </div>
  )  
}

export default LotteryForm;