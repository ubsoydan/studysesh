import { useState, useEffect, useCallback } from "react";
// DnD imports
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
// MUI imports
import { Card } from "@mui/material";

export default function PomodoroTimer() {
    // TIMER RELATED STATES
    const [isRunning, setIsRunning] = useState(false);
    const [workSeconds, setWorkSeconds] = useState(2);
    const [breakSeconds, setBreakSeconds] = useState(1);
    const [timer, setTimer] = useState(workSeconds * 60);
    const [isWorkTime, setIsWorkTime] = useState(true);
    const [isBreakTime, setIsBreakTime] = useState(false);

    // DRAGGING FEATURE RELATED STATES
    const [{ x, y }, api] = useSpring(() => ({ x: 100, y: 200 }));
    const bindPomodoroTimerPos = useDrag(({ offset: [x, y] }) =>
        api.start({ x, y })
    );

    // Countdown functionality
    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTimer((seconds) => seconds - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, timer]);

    // Countdown alarm, responsible for switch - goes off when 0
    useEffect(() => {
        if (timer === 0) {
            // new Audio('/do/it/later.mp3').play()
            setIsRunning(false);

            if (isWorkTime) {
                setIsWorkTime(false);
                setIsBreakTime(true);
                setTimer(breakSeconds * 60);
            } else {
                setIsBreakTime(false);
                setIsWorkTime(true);
                setTimer(workSeconds * 60);
            }
        }
    }, [timer, isWorkTime, isBreakTime, workSeconds, breakSeconds]);

    const handleWorkStart = () => {
        setIsRunning(true);
        setTimer(workSeconds * 60);
        setIsWorkTime(true);
        setIsBreakTime(false);
    };

    const handleBreakStart = () => {
        setIsRunning(true);
        setTimer(breakSeconds * 60);
        setIsBreakTime(true);
        setIsWorkTime(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsWorkTime(true);
        setIsBreakTime(false);
        setTimer(workSeconds * 60);
        setWorkSeconds(workSeconds);
        setBreakSeconds(breakSeconds);
    };

    const handlePause = () => {
        setIsRunning((prevState) => !prevState);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}
            :${seconds.toString().padStart(2, "0")}`;
    };

    const formattedTime = formatTime(timer);

    return (
        <animated.div
            {...bindPomodoroTimerPos()}
            className="absolute"
            style={{ x, y }}
        >
            <Card variant="outlined" sx={{ width: "350px", height: "420px" }}>
                {isBreakTime ? (
                    <div>
                        <h2>Set Break Countdown</h2>
                        <input
                            type="number"
                            value={breakSeconds}
                            onChange={(e) =>
                                setBreakSeconds(parseInt(e.target.value))
                            }
                        />
                    </div>
                ) : (
                    <div>
                        <h2>Set Work Countdown</h2>
                        <input
                            type="number"
                            value={workSeconds}
                            onChange={(e) =>
                                setWorkSeconds(parseInt(e.target.value))
                            }
                        />
                    </div>
                )}
                <br />
                {isBreakTime ? (
                    <div>
                        <button onClick={handleWorkStart}>START</button>
                        <button onClick={handlePause}>PAUSE</button>

                        <button onClick={handleWorkStart}>
                            Start Work Countdown
                        </button>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleWorkStart}>START</button>
                        <button onClick={handlePause}>PAUSE</button>

                        <button onClick={handleBreakStart}>
                            Start Break Countdown
                        </button>
                    </div>
                )}
                <button onClick={handleReset}>Reset</button>
                <br />
                <h1>{formattedTime}</h1>
            </Card>
        </animated.div>
    );
}
// 1. plan out component hierarchy
// 2. set up state variables
// 3. build the timer displayCannot access 'formatTime' before initialization
// 4. add user input fields
// 5. implement timer functionality
// 6. test
