import '../../style.sass';
import {useEffect, useState} from 'react';
import DiaryForm from '../DiaryForm';
import CardContainer from '../CardContainer';
import Context from '../../context';

function App() {
    const [deals, _setDials] = useState([]);
    
    const setDials = (deals) => {
        _setDials(deals);
        localStorage.setItem('deals', JSON.stringify(deals));
    }
    
    useEffect(() => {
        const deals = JSON.parse(localStorage.getItem('deals'));
        if (deals) {
            setDials(deals);
        }
    }, []);
    
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
        <Context.Provider value={{removeDeal, removeDay, addNewDeal}}>
            <div>
                <DiaryForm addNewDials={addNewDeal}/>
                <CardContainer deals={deals} removeDay={removeDay} />
            </div>
        </Context.Provider>
    );
}

export default App;
