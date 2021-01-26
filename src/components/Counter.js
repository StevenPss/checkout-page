import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    
    return (
        <div className="border border-gray-900 rounded-xl flex justify-between items-center px-2 py-2 text-lg font-bold">
            <button className="bg-gray-300 px-2 rounded" onClick={handleDecrement}>-</button>
            <h5>{count}</h5>
            <button className="bg-gray-300 px-2 rounded" onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter
