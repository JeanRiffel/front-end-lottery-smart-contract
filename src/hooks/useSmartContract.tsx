import {useEffect, useState } from 'react'
import axios from 'axios';
import { contractStatus } from '@/utils';

const useSmartContract = () =>{
  const [contract, setContract] = useState(null)
  const [error, setError] = useState()
  const baseURL = 'http://localhost:3001';

  useEffect (()=>{

    const fetchData = async ()=>{
      try{
        const instance = axios.create({ baseURL: baseURL });
        const response = await instance.get('/lottery/contract-name')
        const data = response.data.json()
        setContract(data)
      }catch(err){
        setError(`error ${err}`)
      }
    }

    fetchData()

  }, [])

  return { 
    contract,
    error
  }

}

export default useSmartContract;