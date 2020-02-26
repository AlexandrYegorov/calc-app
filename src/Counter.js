import React from 'react';
import './App.css';

function Counter(props) {

    return (
        <div className='card'>
            <div className='card-body'>
                <div className="row">
                    <div className="col">
                        ID <strong>{props.id}</strong>
                    </div>

                    <div className="col">
                        <strong>{props.name}</strong>
                    </div>

                    <div className="col">
                        <button onClick={() => props.decrement(props.id)} className='btn-sm btn-outline-primary'>-</button>
                        <strong>{props.count}</strong>
                        <button onClick={() => props.increment(props.id)} className='btn-sm btn-outline-primary'>+</button>
                    </div>
                        <button onClick={() => props.remove(props.id)} className='btn-sm btn-outline-secondary'>Delete</button>
                </div>
            </div>

        </div>
    );
}

export default Counter;
