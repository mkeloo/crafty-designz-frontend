import React, { useState, useEffect } from 'react';
import { User, CalendarDays, Clock } from 'lucide-react';

const HeaderBar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    // Update time every minute
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
            );
            setCurrentDate(
                now.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })
            );
        };

        updateDateTime(); // Set initial time and date
        const interval = setInterval(updateDateTime, 60000); // Update every minute
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="w-full flex items-center justify-between bg-gray-900 text-white px-4 py-2 shadow-md">
            {/* Left: Welcome Message */}
            <div className="text-lg">Welcome admin</div>

            {/* Right: Time, Date, and User Icon */}
            <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1 text-sm">
                    <Clock className="w-5 h-5 text-gray-300" />
                    <span>{currentTime}</span>
                </span>
                <span className="flex items-center space-x-1 text-sm">
                    <CalendarDays className="w-5 h-5 text-gray-300" />
                    <span>{currentDate}</span>
                </span>
                <User className="w-6 h-6 text-gray-300" />
            </div>
        </div>
    );
};

export default HeaderBar;