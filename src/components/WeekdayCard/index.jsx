import React from 'react';
import s from './style.module.sass';
import DealCard from '../DealCard';

export default function WeekdayCard({ label, deals }) {
	return (
		<div className={s.container}>
			<div className={s.label}>{label}</div>
			<div className={s.deals}>
				{deals.map((dia) => (
					<DealCard key={dia.id} {...dia} />
				))}
			</div>
		</div>
	);
}
