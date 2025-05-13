import React from 'react';
import {DateTimeDisplay} from './DateTimeDisplay';
import {useCountdown} from "./useCountdown.js";

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
                <DateTimeDisplay value={days} type={'dní'} isDanger={days <= 3} />
                <DateTimeDisplay value={hours} type={'hodin'} isDanger={false} />
                <DateTimeDisplay value={minutes} type={'min'} isDanger={false} />
                {/*<DateTimeDisplay value={seconds} type={'s'} isDanger={false} />*/}
        </div>
    );
};

export const CountdownTimer = ({targetDate}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};