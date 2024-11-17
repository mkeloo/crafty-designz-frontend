"use client";
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
    time: string | number; // Time in days or seconds
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ time }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Convert the `time` prop to milliseconds
        const calculateTargetDate = () => {
            const now = Date.now();
            const timeInMilliseconds =
                typeof time === "string"
                    ? parseInt(time.match(/\d+/)?.[0] || "0", 10) * 24 * 60 * 60 * 1000
                    : time * 24 * 60 * 60 * 1000;

            return now + timeInMilliseconds;
        };

        const targetDate = calculateTargetDate();

        const calculateTimeLeft = () => {
            const now = Date.now();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div className="flex items-center justify-center space-x-4 text-sm font-medium">
            <div className="flex flex-col items-center">
                <span className="text-lg font-semibold font-outfit">{timeLeft.days}</span>
                <span className="text-sm font-light font-outfit">Days</span>
            </div>
            <span className="text-lg font-semibold font-outfit">:</span>
            <div className="flex flex-col items-center">
                <span className="text-lg font-semibold font-outfit">{timeLeft.hours}</span>
                <span className="text-sm font-light font-outfit">Hours</span>
            </div>
            <span className="text-lg font-semibold font-outfit">:</span>
            <div className="flex flex-col items-center">
                <span className="text-lg font-semibold font-outfit">{timeLeft.minutes}</span>
                <span className="text-sm font-light font-outfit">Minutes</span>
            </div>
            <span className="text-lg font-semibold font-outfit">:</span>
            <div className="flex flex-col items-center">
                <span className="text-lg font-semibold font-outfit">{timeLeft.seconds}</span>
                <span className="text-sm font-light font-outfit">Seconds</span>
            </div>
        </div>
    );
};

export default CountdownTimer;