import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hoot";
import { expireTicket } from "../../features/ticketSlice";

interface CountdownTimerProps {
  id: string;
  endDate: string; 
}

const Timer: React.FC<CountdownTimerProps> = ({ id, endDate }) => {
  const dispatch = useAppDispatch();
  const [timeLeft, setTimeLeft] = useState<number>(
    new Date(endDate).getTime() - new Date().getTime()
  );

  useEffect(() => {
    if (timeLeft <= 0) {
      
      dispatch(expireTicket(id));
      return;
    }

    const interval = setInterval(() => {
      const timeDiff = new Date(endDate).getTime() - new Date().getTime();
      setTimeLeft(timeDiff);
      if (timeDiff <= 0) {
        clearInterval(interval);
        dispatch(expireTicket(id));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, endDate, dispatch, id]);


  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <span className="text-green-400 font-Outfit">
      {days}d {hours}h {minutes}m {seconds}s
    </span>
  );
};

export default Timer;
