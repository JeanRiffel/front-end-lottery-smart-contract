import { 
  Typography, 
  Card,
} from '@mui/material';
import styles from './Header.module.scss'

const title = 'Blockchain Bet'

const Header = () => {
  return (
    <Card className={styles.header__card} >
      <Typography  className={styles.header__title}>
        {title}
      </Typography>
    </Card>
  )
}

export default Header;