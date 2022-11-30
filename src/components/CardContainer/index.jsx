import React, {useEffect} from 'react';
import WeekdayCard from '../WeekdayCard';
import s from './style.module.sass';
import EmptyDeals from '../EmptyDeals/EmptyDeals';

export default function CardContainer({deals}) {
    
    function getDealsByDay(day) {
        return deals.filter((deal) => deal.day === day);
    }
    
    function getDayLabel(day) {
        const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
        return days[day - 1];
    }
    
    useEffect(() => {
        let result = [];
        
        deals.forEach(deal => {
            const cur_days = result.map(day => day.day_num);
            if (cur_days.includes(deal.day)) {
                const day = result.find(day => day.day_num === deal.day);
                day.deals.push(deal)
            } else {
                result.push({
                    day_num: deal.day,
                    deals: [deal]
                })
            }
        });
    }, [deals]);
    
    console.log(!!deals);
    return deals.length > 0
        ? (
            <div className={s.card}>
                {Array.from(new Set(deals.map((deal) => deal.day)))
                    .sort((a, b) => a - b)
                    .map((day) => {
                            console.log(day);
                            return <WeekdayCard key={day + Date.now() / 2}
                                                label={getDayLabel(day)}
                                                deals={getDealsByDay(day)}></WeekdayCard>
                        }
                    )
                }
            </div>
        )
        : <EmptyDeals/>
}
