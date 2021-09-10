import styles from '../styles/Timer.module.css';

// components
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface TimerProps {
  duration: number;
  timeIsOver: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={120}
        duration={props.duration}
        isPlaying
        onComplete={props.timeIsOver}
        colors={[[ '#BCE596', 0.33 ], [ '#F7B801', 0.33 ], [ '#ED827A', 0.33 ]]}>
        { ({ remainingTime }) => remainingTime }
      </CountdownCircleTimer>
    </div>
  );
}