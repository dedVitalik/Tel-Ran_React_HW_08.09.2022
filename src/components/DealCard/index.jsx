import React from 'react';
import s from './style.module.sass';

export default function DealCard({ descr, importance, removeDeal, id }) {
	const colorClass = importance === '1' ? s.red : s.green;
	
	const [showDelete, setShowDelete] = React.useState(false);
	return (
		<div className={s.card + ' ' + colorClass}
			 onMouseOver={() => setShowDelete(true)}
			 onMouseOut={() => setShowDelete(false)}
		>
			<p>{descr}</p>
			{showDelete ? <div className={s.delete} onClick={() => removeDeal(id)}></div> : null}
		</div>
	);
}
