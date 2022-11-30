import React from 'react';
import s from './style.module.sass';
import DealCard from '../DealCard';
import Close from '../UI/Close';
import Context from '../../context';

export default function WeekdayCard({label, deals}) {
    
    const [showDelete, setShowDelete] = React.useState(false);
    
    const {removeDay} = React.useContext(Context);
    
    const mouseOverHandler = (evt) => {
        evt.preventDefault();
        if (evt.target.className.split('_')[1] === 'deals' || evt.target.className.split('_')[1] === 'deleteday') {
            setShowDelete(true)
        }
    }
    
    return (<div className={s.container}
                 onMouseOver={mouseOverHandler}
                 onMouseOut={() => setShowDelete(false)}
        >
            <div className={s.label}>{label}</div>
            <div className={s.deals}>
                {deals.map((deal) => (
                    <>
                        <DealCard key={deal.id} {...deal} />
                        <div key={deal.id + 1000} className={s.close} onClick={() => removeDay(deal.day)}>
                            <Close/>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
