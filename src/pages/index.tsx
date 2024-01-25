import { useState, useEffect } from 'react';
import { Button, TextField, Typography, Table, TableBody,
  TableCell, TableContainer, TableHead,
  TableRow, Paper } from '@mui/material';
import axios from 'axios';
import index from './index.module.css'

export default function Home() {
  const [betValue, setBetValue] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [gambler, setGambler] = useState('');
  const [address, setAddress] = useState('')
  const [contractName, setContractName] = useState('');
  const [randomNumber, setRandomNumber] = useState('');
  const [winner, setWinner] = useState('');
  const [players, setPlayers] = useState<any[]>([]);

  useEffect( ()=>{
    handleContractName();
  }, [])

  const handleWinner = async () => {
/*    const instance = axios.create({ 
      baseURL: 'http://localhost:3001'
    })

    await instance.get('/winner')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });    
*/


    const payload = {
      betValue,
      betAmount,
      address
    }

    /*
    const instance = axios.create({ 
      baseURL: 'http://localhost:3001'
    })

    await instance.post('/place-bet', payload )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
    
*/

  }

  const handleBet = () => {
    const player = { gambler, betValue, betAmount, address }
    setPlayers((prevPlayers) => [...prevPlayers, player,]);
  };

  const handleContractName = async () =>{
    const instance = axios.create({ 
      baseURL: 'http://localhost:3001'
    })

    await instance.get('/contract-name')
      .then(response => {
        console.log(response.data.contractName)
        setContractName(response.data.contractName)
      })
      .catch(error => {
        console.log(error)
      });
  }

  const getContractName = () => contractName  ? contractName : 'Sorry, The contract is unvailable now!';

  const getPlayers = () =>{
    return ( 
      <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 650, backgroundColor: 'silver' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Gambler</TableCell>
              <TableCell>BetValue</TableCell>
              <TableCell>BetAmount</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { players.map((player) =>  
              <TableRow>
                <TableCell>{player.gambler}</TableCell>
                <TableCell>{player.betValue}</TableCell>
                <TableCell>{player.betAmount}</TableCell>
                <TableCell>{player.address}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  const handleClearPlayers = () => {
    setPlayers([])
  }

  return (
    <div  >
      <Typography
        variant="h3" 
        gutterBottom
      >
       {getContractName()}
      </Typography>
      <div className={index.container}>
        
        <div className={index.field}>
          <TextField
            sx={{width: '500px', padding: '10px'}}
            variant="outlined"    
            label="Gambler"
            onChange={(e) => setGambler(e.target.value)}
          />
        </div>
        <div className={index.field}>
          <TextField
            sx={{width: '500px', padding: '10px'}}
            variant="outlined"    
            label="Bet Value" 
            onChange={(e) => setBetValue(e.target.value)}
          />
        </div>
        <div className={index.field}>
          <TextField
            sx={{width: '500px', padding: '10px'}}
            variant="outlined" 
            label="Bet Amount"          
            onChange={(e) => setBetAmount(e.target.value)}
          />
        </div >
        <div className={index.field}>
          <TextField
            sx={{width: '500px', padding: '10px'}}
            variant="outlined" 
            label="Account Address"          
            onChange={(e) => setAddress(e.target.value)}
          />    
        </div>    

        <div className={index.button_container}>
          <Button 
            sx={{width: '248px', padding: '2px'}}
            variant="contained"
            onClick={handleBet}
          >
            Place Bet
          </Button>

          <Button 
            sx={{width: '248px', padding: '2px'}}
            variant="contained"
            onClick={handleWinner}
          >
            Get Winner
          </Button>
          <Button 
            sx={{width: '248px', padding: '2px', background: 'red'}}
            variant="contained"
            onClick={handleClearPlayers}
          >
            Clear Players
          </Button>

        </div>
        <div className={index.table}>
          {getPlayers()}
        </div>
      </div>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
}
