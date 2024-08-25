import { createContext } from "react";

type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    timers: {
        timers: Timer[];
        isRunning: boolean;
    }[];
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

// createContext is a generic type, so we need to pass the type of the context value to it
const TimersContext = createContext<TimersContextValue | null>(null);