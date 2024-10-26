import React, { createContext, ReactNode, useContext, useState } from 'react';

interface BetContextProps {

  betValue: number;
  setBetValue: React.Dispatch<React.SetStateAction<number>>;
  address: string;
  setAddress:  React.Dispatch<React.SetStateAction<string>>;
  players: any[];
  setPlayers:  React.Dispatch<React.SetStateAction<any[]>>;
}

const BetContext = createContext<BetContextProps | undefined>(undefined);

export const BetContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [betValue, setBetValue] = useState(0);
  const [address, setAddress] = useState('')
  const [players, setPlayers] = useState<any[]>([]);

  return (
    <BetContext.Provider 
      value={{ 

        betValue, setBetValue,

        address, setAddress,
        players, setPlayers,
    }}>
      {children}
    </BetContext.Provider>
  );
};

export default BetContext;
