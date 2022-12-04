import React from 'react';
import Week25 from '../Week25/Week25';
import Week27 from '../Week27/Week27';
import style from './main.module.scss';

export default function Main() {
    return (
        <div className={style.container}>
             <Week25/>
             <Week27/>
        </div>
    );
}

