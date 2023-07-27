import { useState } from 'react';
import Fruit from './Fruit';

function Greengrocer() {
    const [fruits] = useState([
        { name: 'Banane', price: 0.7, quantity: 3 },
        { name: 'Kiwi', price: 2.5, quantity: 3 },
        { name: 'Fraise', price: 3, quantity: 0 },
        { name: 'Citron', price: 0.5, quantity: 3 },
        { name: 'Framboise', price: 1.6, quantity: 0 },
    ]);

    return (
        <div className="bg">
            {fruits.map((fruit, index) => <Fruit key={index} fruit={fruit} />)}
        </div>
    );
}

export default Greengrocer;
