import React, { useState } from "react";
import styles from './StopWatch.module.css';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "../Button/Button";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

export default function StopWatch() {
    const [getTimerInputs, setTimeInputs] = useState([0, 0, 0]); // [hours, minutes, seconds]
    const [getDuration, setDuration] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [remainingDisplay, setRemainingDisplay] = useState("00:00:00");

    // ✅ Helper to format time
    const formatTime = (h, m, s) =>
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    // ✅ Increment function
    const incrementTime = (index) => {
        setTimeInputs((prev) => {
            const newTime = [...prev];
            if (index === 0) newTime[0] = (prev[0] + 1) % 25;
            if (index === 1) newTime[1] = (prev[1] + 1) % 60;
            if (index === 2) newTime[2] = (prev[2] + 1) % 60;
            return newTime;
        });
    };

    // ✅ Decrement function
    const decrementTime = (index) => {
        setTimeInputs((prev) => {
            const newTime = [...prev];
            if (index === 0) newTime[0] = prev[0] === 0 ? 24 : prev[0] - 1;
            if (index === 1) newTime[1] = prev[1] === 0 ? 59 : prev[1] - 1;
            if (index === 2) newTime[2] = prev[2] === 0 ? 59 : prev[2] - 1;
            return newTime;
        });
    };

    // ✅ Start Timer
    const handleStart = () => {
        const totalSeconds =
            getTimerInputs[0] * 3600 +
            getTimerInputs[1] * 60 +
            getTimerInputs[2];

        setDuration(totalSeconds);
        setRemainingDisplay(formatTime(getTimerInputs[0], getTimerInputs[1], getTimerInputs[2]));
        setTimerStarted(true);
    };

    // ✅ Stop Timer
    const handleStop = () => {
        setTimerStarted(false);
    };

    // ✅ Countdown display formatter
    const renderRemainingTime = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        const formatted = formatTime(hours, minutes, seconds);
        setRemainingDisplay(formatted);
        return formatted;
    };

    return (
        <div className={styles.stopwatch_container}>
            <div className={styles.round_timer}>
                <CountdownCircleTimer
                    key={getDuration} 
                    isPlaying={timerStarted}
                    duration={getDuration}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[getDuration, getDuration / 2, 10, 0]}
                >
                    {renderRemainingTime}
                </CountdownCircleTimer>
            </div>

            <div className={styles.timer_inputs_container}>
                <div className={styles.timer_inputs_sub_container}>
                    {["Hours", "Minutes", "Seconds"].map((label, i) => (
                        <div key={i} className={styles.timer_inputs}>
                            <GoTriangleUp onClick={() => incrementTime(i)} />
                            {String(getTimerInputs[i]).padStart(2, "0")}
                            <GoTriangleDown onClick={() => decrementTime(i)} />
                            <p className={styles.input_labels}>{label}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.timer_button}>
                    {timerStarted
                        ? <Button work="Stop" onClick={handleStop} />
                        : <Button work="Start" onClick={handleStart} />}
                </div>
            </div>
        </div>
    );
}
