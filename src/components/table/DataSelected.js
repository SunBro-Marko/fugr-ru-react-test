import React from 'react';
import './DataSelected.css';

export default (props) => {

    const smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
        bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    return (
        <div className="flex">
            <button className="btn btn-success" onClick={() => props.selectionData(smallData)}>Маленький объем данных</button>
            <button className="btn btn-warning" onClick={() => props.selectionData(bigData)}>Большой объем данных</button>
        </div>
    )
}