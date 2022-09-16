import React from 'react';
import s from './style.module.sass';
import DealCard from '../DealCard';

export default function WeekdayCard({label, deals, removeDeal, removeDay}) {
    
    const [showDelete, setShowDelete] = React.useState(false);
    
    const mouseOverHandler = (evt) => {
        evt.preventDefault();
        if (evt.target.className.split('_')[1] === 'deals' || evt.target.className.split('_')[1] === 'deleteday') {
            setShowDelete(true)
        }
    }
    
    return (
        <div className={s.container}
             onMouseOver={mouseOverHandler}
             onMouseOut={() => setShowDelete(false)}
        >
            <div className={s.label}>{label}</div>
            <div className={s.deals}>
                {deals.map((deal) => (
                    <>
                        <DealCard removeDeal={removeDeal} key={deal.id} {...deal} />
                        {showDelete ? <div className={s.deleteday} onClick={() => removeDay(deal.day)}></div> : null}
                    </>
                ))}
            </div>
        </div>
    );
}
