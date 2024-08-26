import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Timer = {
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

type StartTimersAction = {
    type: 'START_TIMERS';
};

type StopTimersAction = {
    type: 'STOP_TIMERS';
};

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
    switch (action.type) {
        case 'START_TIMERS':
            return {
                ...state,
                isRunning: true,
            };
        case 'STOP_TIMERS':
            return {
                ...state,
                isRunning: false,
            };
        case 'ADD_TIMER':
            return {
                ...state,
                timers: [
                    ...state.timers,
                    { name: action.payload.name, duration: action.payload.duration },
                ],
            };
        default:
            return state;
    }
}

const initialState: TimersState = {
    isRunning: true,
    timers: [],
};

// createContext is a generic type, so we need to pass the type of the context value to it
const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext)
  
    if (timersCtx === null) {
      throw new Error('TimersContext is null - that should not be the case!');
    }
  
    return timersCtx;
};

export default function TimersProvider({ children }: TimersProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER', payload: timerData });
        },
        startTimers() {
            dispatch({ type: 'START_TIMERS' });
        },
        stopTimers() {
            dispatch({ type: 'STOP_TIMERS' });
        },
    };

    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    );
};