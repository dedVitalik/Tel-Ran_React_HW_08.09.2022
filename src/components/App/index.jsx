import '../../style.sass';
import { useState } from 'react';
import DiaryForm from '../DiaryForm';
import CardContainer from '../CardContainer';

function App() {
	const [deals, setDials] = useState([]);
	const addNewDeal = (descr, importance, day) => {
		setDials([
			...deals,
			{
				id: Date.now(),
				descr,
				importance,
				day,
			},
		]);
	};
	
	const removeDeal = (id) => {
		setDials(deals.filter((deal) => deal.id !== id));
	}
	
	const removeDay = (day) => {
		setDials(deals.filter((deal) => deal.day !== day));
	}

	return (
		<div>
			<DiaryForm addNewDials={addNewDeal} />
			<CardContainer deals={deals} removeDay={removeDay} removeDeal={removeDeal}/>
		</div>
	);
}

export default App;
