import React from 'react';
import s from './style.module.sass';

function Close(props) {
    return (
        <button className={s.close}>
            x
        </button>
    );
}

export default Close;