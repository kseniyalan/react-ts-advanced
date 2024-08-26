import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const { timers, isRunning } = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
