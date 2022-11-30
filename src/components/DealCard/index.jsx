import React from 'react';
import s from './style.module.sass';
import Close from '../UI/Close';
import Context from '../../context';

export default function DealCard({descr, importance, id}) {
    const colorClass = importance === '1' ? s.red : s.green;
    
    const [showDelete, setShowDelete] = React.useState(false);
    
    const {removeDeal} = React.useContext(Context);
    
    return (
        <div className={s.card + ' ' + colorClass}
             onMouseOver={() => setShowDelete(true)}
             onMouseOut={() => setShowDelete(false)}
        >
            <p>{descr}</p>
            <div className={s.close} onClick={() => removeDeal(id)}>
				<Close/>
			</div>
        </div>
    );
}
