import { useEffect, useRef, useState, type MouseEvent } from 'react';

const initialValue = { minutes: 0, seconds: 0, milliseconds: 0 };

enum OPERATIONS {
  START = 'start',
  PAUSE = 'pause',
  CONTINUE = 'continue',
}

export default function Stopwatch() {
  const [currentOperation, setCurrentOperation] = useState<OPERATIONS | null>(
    null,
  );
  const [time, setTime] = useState(initialValue);

  // keep track of accumulated elapsed time using refs
  const accumulatedRef = useRef(0);
  const startRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (
      currentOperation === OPERATIONS.START ||
      currentOperation === OPERATIONS.CONTINUE
    ) {
      // if we start or continue, set the start time relative to accumulated time
      startRef.current = Date.now() - accumulatedRef.current;

      intervalRef.current = window.setInterval(() => {
        const elapsed = Date.now() - (startRef.current || 0);
        setTime({
          minutes: Math.floor(elapsed / 60000),
          seconds: Math.floor((elapsed % 60000) / 1000),
          milliseconds: Math.floor((elapsed % 1000) / 10),
        });
      }, 10);
    }

    if (currentOperation === OPERATIONS.PAUSE && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      // store total elapsed at pause time
      accumulatedRef.current =
        time.minutes * 60000 + time.seconds * 1000 + time.milliseconds * 10;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentOperation]);

  const handleStartPause = (event: MouseEvent<HTMLButtonElement>) => {
    const { innerText } = event.target as HTMLButtonElement;
    setCurrentOperation(innerText.toLowerCase() as OPERATIONS);
  };

  const handleReset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    accumulatedRef.current = 0;
    startRef.current = null;
    setTime(initialValue);
    setCurrentOperation(null);
  };

  return (
    <div>
      <div style={{ padding: '20px' }}>
        {time.minutes > 0 && (
          <>
            <h2>{time.minutes}</h2>m
          </>
        )}
        <h3>{time.seconds}</h3>s <h4>{time.milliseconds}</h4>ms
      </div>

      <div>
        <button onClick={handleStartPause}>
          {!currentOperation
            ? 'START'
            : currentOperation === OPERATIONS.START
              ? 'PAUSE'
              : currentOperation === OPERATIONS.PAUSE
                ? 'CONTINUE'
                : 'PAUSE'}
        </button>

        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}
