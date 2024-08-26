import { useEffect, useRef, useState } from 'react';

import Container from './UI/Container.tsx';
import { type Timer as TimerProps, useTimersContext } from '../store/timers-context.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => {
          // It fixes the issue: if restart timer after it reaches 0, it will start from 0, not from 0 - 50
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
      // We dont need to pass isRunning as a dependency because we are already in "else if" block -> isRunning is false
    } else if (interval.current) {
      clearInterval(interval.current)
    }

    // Clear the interval when the component is unmounted: useEffect's cleanup function
    return () => clearInterval(timer);
  }, [isRunning]);

  // Convert the remaining time back to seconds and round it to two decimal places
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
