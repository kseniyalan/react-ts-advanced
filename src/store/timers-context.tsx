import { createContext, useContext, type ReactNode } from "react";

type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

type TimersProviderProps = {
    children: ReactNode;
};

// createContext is a generic type, so we need to pass the type of the context value to it
const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext)
  
    if (timersCtx === null) {
      throw new Error('TimersContext is null - that should not be the case!');
    }
  
    return timersCtx;
  }

export default function TimersProvider({ children }: TimersProviderProps) {
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timerData) {
            // ...
        },
        startTimers() {
            // ...
        },
        stopTimers() {
            // ...
        },
    };

    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    );
};