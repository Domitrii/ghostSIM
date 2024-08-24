import React, { useEffect, useState } from 'react';
import css from './TimePeaker.module.css';

function TimePicker({ timeActive, ara }) {
    const [hour, setHour] = useState(Math.floor(timeActive / 60));
    const [minute, setMinute] = useState(timeActive % 60);
    const [value, setValue] = useState(timeActive);

    useEffect(() => {
        setValue(hour * 60 + minute);
    }, [hour, minute]);

    const handleTimeChange = (newHour, newMinute) => {
        if (newHour !== undefined) {
            setHour(newHour);
        }
        if (newMinute !== undefined) {
            setMinute(newMinute);
        }
    };

    useEffect(() => {
        ara(value)
    }, [value])

    return (
        <div className={css.timePicker}>
            <div className={css.timeField}>
                <input
                    type="number"
                    value={hour === 0 ? '' : hour}
                    onChange={e => handleTimeChange(Math.max(0, Math.min(24, parseInt(e.target.value) || 0)), minute)}
                    min="0"
                    max="24"
                />
                <span>:</span>
                <input
                    type="number"
                    value={minute === 0 ? '' : minute} 
                    onChange={e => handleTimeChange(hour, Math.max(0, Math.min(59, parseInt(e.target.value.replace(/^0+/, '')) || 0)))}
                    min="0"
                    max="59"
                />
            </div>
        </div>
    );
}

export default TimePicker;

