import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../../utils/utility';

const CountDown = ({ launchDateTime = '2021-03-10T02:58:00Z' }) => {

    const calculateTimeLeft = () => {
        const difference = +new Date(launchDateTime) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    return (
        <>

            T-  {formatNumber(timeLeft.days)} <small>d</small> : {formatNumber(timeLeft.hours)} <small>h</small> : {formatNumber(timeLeft.minutes)} <small>m</small> : {formatNumber(timeLeft.seconds)} <small>s</small>
        </>
    )
}


export default CountDown
