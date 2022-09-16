import '../../style.sass';
import { useState } from 'react';
import DiaryForm from '../DiaryForm';
import CardContainer from '../CardContainer';

function App() {
	const [deals, setDials] = useState([]);
	const addNewDials = (descr, importance, day) => {
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

	return (
		<div>
			<DiaryForm addNewDials={addNewDials} />
			<CardContainer deals={deals} />
		</div>
	);
}

export default App;
