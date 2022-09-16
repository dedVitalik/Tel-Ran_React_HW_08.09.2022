import React from 'react';
import s from './style.module.sass';
import Select from 'react-select';
import Button from '../Button';

const day_options = [
	{ value: 1, label: 'ПН' },
	{ value: 2, label: 'ВТ' },
	{ value: 3, label: 'СР' },
	{ value: 4, label: 'ЧТ' },
	{ value: 5, label: 'ПТ' },
	{ value: 6, label: 'СБ' },
	{ value: 7, label: 'ВС' },
];

const importance_options = [
	{ value: 0, label: 'неважное ' },
	{ value: 1, label: 'важное' },
];

export default function DiaryForm({ addNewDials }) {
	const submit = (event) => {
		event.preventDefault();
		const { day, importance, description } = event.target;
		addNewDials(description.value, importance.value, day.value);
		day.value = '';
		importance.value = '';
		description.value = '';
	};

	return (
		<form onSubmit={submit} className={s.container}>
			<div className={s.input_container}>
				<Select name="day" options={day_options} />
				<Select name="importance" options={importance_options} />
				<input
					className={s.descr}
					type="text"
					name="description"
					placeholder="Описание"
				/>
			</div>
			<Button>Добавить</Button>
		</form>
	);
}
