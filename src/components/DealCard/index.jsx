import React from 'react';
import s from './style.module.sass';

export default function DealCard({ descr }) {
	return (
		<div className={s.card}>
			<p>{descr}</p>
		</div>
	);
}
