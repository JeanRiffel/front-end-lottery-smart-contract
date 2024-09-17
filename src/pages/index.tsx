import LotteryTemplate from '@/components/templates/lottery/LotteryTemplate';
import { BetContextProvider } from '@/contexts/BetContext';

export default function Home() {
  return (
    <div>
      <BetContextProvider>
        <LotteryTemplate/>
      </BetContextProvider>
    </div>
  );
}
