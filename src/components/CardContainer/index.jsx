import React from 'react';
import WeekdayCard from '../WeekdayCard';
import s from './style.module.sass';

export default function CardContainer({deals, removeDeal, removeDay}) {
    
    function getDealsByDay(day) {
        return deals.filter((deal) => deal.day === day);
    }
    
    function getDayLabel(day) {
        const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
        return days[day - 1];
    }
    
    
    return (
        <div className={s.card}>
            {Array.from(new Set(deals.map((deal) => deal.day)))
                .sort((a, b) => a - b)
                .map((day) =>
                    <WeekdayCard key={day}
                        removeDeal={removeDeal}
                        removeDay={removeDay}
                        label={getDayLabel(day)}
                        deals={getDealsByDay(day)}/>)
            }
        </div>
    );
}
