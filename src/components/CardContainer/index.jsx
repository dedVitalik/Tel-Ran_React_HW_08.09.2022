import React from 'react';
import WeekdayCard from '../WeekdayCard';
import s from './style.module.sass';

export default function CardContainer({deals}) {
    
    
    return (
        <div className={s.card}>
            {Array.from(new Set(deals.map((deal) => deal.day)))
                .sort((a, b) => a - b)
                .map((day) =>
                    <WeekdayCard key={day} label={day} deals={deals.filter((deal) => deal.day === day)}/>)
            }
        </div>
    );
}
