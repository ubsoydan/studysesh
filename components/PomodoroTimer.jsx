import { useState, useEffect, useCallback } from "react";
//
import Draggable from "react-draggable";
// MUI imports
import { Card } from "@mui/material";
//
import useLocalStorage from "../hooks/useLocalStorage";

export default function PomodoroTimer() {
    // TIMER RELATED STATES
    const [isRunning, setIsRunning] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(2);
    const [breakMinutes, setBreakMinutes] = useState(1);
    const [timer, setTimer] = useState(workMinutes * 60);
    const [isWorkTime, setIsWorkTime] = useState(true);
    const [isBreakTime, setIsBreakTime] = useState(false);
    //
    const [pomodoroPos, setPomodoroPos] = useState({});

    useEffect(() => {
        const customPosition = JSON.parse(localStorage.getItem("pomodoroPos"));
        customPosition
            ? setPomodoroPos(customPosition)
            : setPomodoroPos({ x: 100, y: 200 });
    }, []);

    useEffect(() => {
        localStorage.setItem("pomodoroPos", JSON.stringify(pomodoroPos));
    }, [pomodoroPos]);

    const updatePosition = (e, position) => {
        setPomodoroPos({ x: position.x, y: position.y });
    };

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
                setTimer(breakMinutes * 60);
            } else {
                setIsBreakTime(false);
                setIsWorkTime(true);
                setTimer(workMinutes * 60);
            }
        }
    }, [timer, isWorkTime, isBreakTime, workMinutes, breakMinutes]);

    const handleWorkStart = () => {
        if (!isRunning && timer > 0) {
            setIsWorkTime(true);
            setIsBreakTime(false);
        } else {
            setIsWorkTime(true);
            setIsBreakTime(false);
            setTimer(workMinutes * 60);
        }
        setIsRunning(true);
    };

    const handleBreakStart = () => {
        if (!isRunning && timer > 0) {
            setIsBreakTime(true);
            setIsWorkTime(false);
        } else {
            setIsBreakTime(true);
            setIsWorkTime(false);
            setTimer(breakMinutes * 60);
        }
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        if (isWorkTime) {
            setIsWorkTime(true);
            setIsBreakTime(false);
            setTimer(workMinutes * 60);

            setWorkMinutes(workMinutes);
            console.log("workTime true");
        } else {
            setIsBreakTime(true);
            setIsWorkTime(false);
            setTimer(breakMinutes * 60);

            setBreakMinutes(breakMinutes);
        }
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
        <Draggable position={pomodoroPos} onStop={updatePosition}>
            <div className="absolute">
                <Card
                    variant="outlined"
                    sx={{ width: "350px", height: "500px" }}
                    className="bg-white rounded-lg shadow-lg p-4 w-72 h-90 flex flex-col justify-between"
                >
                    <div className="flex justify-center items-center text-4xl font-bold">
                        {formattedTime}
                    </div>
                    <button
                        onClick={
                            isRunning
                                ? handlePause
                                : isWorkTime
                                ? handleWorkStart
                                : handleBreakStart
                        }
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    >
                        {isRunning ? "Pause" : "Start"}
                    </button>
                    {isBreakTime ? (
                        <div className="mt-2">
                            <button
                                onClick={handleWorkStart}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Start Work Countdown
                            </button>
                        </div>
                    ) : (
                        <div className="mt-2">
                            <button
                                onClick={handleBreakStart}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Start Break Countdown
                            </button>
                        </div>
                    )}
                    <button
                        onClick={handleReset}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                        Reset
                    </button>
                    <br />
                    {isBreakTime ? (
                        <div className="mt-2">
                            <h2 className="font-bold text-xl mb-2">
                                Set Break Countdown
                            </h2>
                            <input
                                type="number"
                                value={breakMinutes}
                                onChange={(e) =>
                                    setBreakMinutes(parseInt(e.target.value))
                                }
                                className="w-full border rounded py-2 px-3"
                            />
                        </div>
                    ) : (
                        <div className="mt-2">
                            <h2 className="font-bold text-xl mb-2">
                                Set Work Countdown
                            </h2>
                            <input
                                type="number"
                                value={workMinutes}
                                onChange={(e) =>
                                    setWorkMinutes(parseInt(e.target.value))
                                }
                                className="w-full border rounded py-2 px-3"
                            />
                        </div>
                    )}
                </Card>
            </div>
        </Draggable>
    );
}
// 1. plan out component hierarchy
// 2. set up state variables
// 3. build the timer displayCannot access 'formatTime' before initialization
// 4. add user input fields
// 5. implement timer functionality
// 6. test
