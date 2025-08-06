import { useState, useEffect } from 'react';

const useCountdownTimer = (duration: number) => {
  const [time, setTime] = useState(duration);

  const remainingTime = time < 10 ? `0${time}` : time.toString();
  const isFinished = time === 0;

  const startTimer = () => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return interval;
  };

  const reset = () => {
    setTime(duration);
    startTimer();
  };

  useEffect(() => {
    const interval = startTimer();
    return () => clearInterval(interval);
  }, [duration]);

  return { remainingTime, isFinished, reset };
};

export default useCountdownTimer;
