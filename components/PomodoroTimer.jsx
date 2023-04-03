import { useState, useEffect } from "react";
// DnD imports
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
// MUI imports
import { Card } from "@mui/material";

export default function PomodoroTimer() {
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [time, setTime] = useState(workTime * 60);
    const [isRunning, setIsRunning] = useState(false);

    // DRAGGING FEATURE RELATED STATES
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
    const bindPomodoroTimerPos = useDrag(({ offset: [x, y] }) =>
        api.start({ x, y })
    );

    // functions

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(workTime * 60);
    };

    const toggleInterval = () => {
        if (time === workTime * 60) {
            setTime(breakTime * 60);
        } else {
            setTime(workTime * 60);
        }
    };

    const handleWorkTimeChange = (event) => {
        const value = event.target.value;
        setWorkTime(value);
        !isRunning ? setTime(value * 60) : null;
    };

    const handleBreakTimeChange = (event) => {
        const value = event.target.value;
        setBreakTime(value);
        !isRunning && time === workTime * 60 ? setTime(value * 60) : null;
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}
            :${seconds.toString().padStart(2, "0")}`;
    };

    const formattedTime = formatTime(time);

    useEffect(() => {
        let intervalId;
        if (isRunning && time > 0) {
            intervalId = setTimeout(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (isRunning && time === 0) {
            toggleInterval();
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time, toggleInterval]);

    return (
        <animated.div
            {...bindPomodoroTimerPos()}
            className="absolute"
            style={{ x, y }}
        >
            <Card variant="outlined" sx={{ width: "350px", height: "420px" }}>
                <div className="timer">
                    <h2>{formattedTime}</h2>
                    <button onClick={isRunning ? stopTimer : startTimer}>
                        {isRunning ? "Stop" : "Start"}
                    </button>
                    <button onClick={resetTimer}>Reset</button>
                </div>
                <div className="settings" style={{ marginTop: "20px" }}>
                    <div>
                        <h3>Work Interval</h3>
                        <input
                            type="number"
                            min="1"
                            value={workTime}
                            onChange={handleWorkTimeChange}
                            style={{ width: "60px", marginLeft: "10px" }}
                        />
                        <span style={{ marginLeft: "10px" }}>minutes</span>
                    </div>
                    <h2>{formattedTime}</h2>
                    <div style={{ marginTop: "10px" }}>
                        <h3>Break Interval</h3>
                        <input
                            type="number"
                            min="1"
                            value={breakTime}
                            onChange={handleBreakTimeChange}
                            style={{ width: "60px", marginLeft: "10px" }}
                        />
                        <span style={{ marginLeft: "10px" }}>minutes</span>
                    </div>
                </div>
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
