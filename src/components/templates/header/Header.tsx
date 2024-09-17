import { 
  Typography, 
  Card,
} from '@mui/material';
import styles from './Header.module.scss'
import useSmartContract from '@/hooks/useSmartContract';
import Alert from '@mui/material/Alert';

const title = 'Blockchain Bet'

const Header = () => {
  const { contract, error } = useSmartContract()

  const renderAlert = ()=>{
    if ( error ) return <Alert severity="error">{'not found'}</Alert>;   

    /*const contractStatusCode = contract.code;
    const contractStatusMessage = contract?.message;

    return contractStatusCode === 1 ? 
      <Alert severity="success">{contractStatusMessage}</Alert> :
      <Alert severity="error">{contractStatusMessage}</Alert>;   */
  }

  return (
    <Card className={styles.header__card} >
      <Typography  className={styles.header__title}>
        {title}
      </Typography>
      {renderAlert()}

    </Card>
  )
}

export default Header;