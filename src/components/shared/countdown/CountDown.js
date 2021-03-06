import { MDBTypography } from 'mdbreact';
import React, { useState, useEffect } from 'react';

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

    const formatNumber = (num) => {
        if (!num) {
            return '00'
        }
        return num.toString().length === 1 ? `0${num}` : num;
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
            <MDBTypography tag='h2' variant="h2-responsive">
                T-  {formatNumber(timeLeft.days)} <small style={{ fontSize: '1rem' }} className="text-muted">d</small> : {formatNumber(timeLeft.hours)} <small style={{ fontSize: '1rem' }} className="text-muted">h</small> : {formatNumber(timeLeft.minutes)} <small style={{ fontSize: '1rem' }} className="text-muted">m</small> : {formatNumber(timeLeft.seconds)} <small style={{ fontSize: '1rem' }} className="text-muted">s</small>
            </MDBTypography>
        </>
    )
}


export default CountDown
