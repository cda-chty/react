import { useState } from 'react';
import Fruit from './Fruit';

function Greengrocer() {
    const [fruits] = useState([
        { name: 'Banane', price: 0.7, quantity: 1 },
        { name: 'Kiwi', price: 2.5, quantity: 2 },
        { name: 'Fraise', price: 3, quantity: 0 },
        { name: 'Citron', price: 0.5, quantity: 3 },
        { name: 'Framboise', price: 1.6, quantity: 0 },
    ]);
    const [total, setTotal] = useState({ price: 0, quantity: 0 });
    const updateTotal = (event, fruit) => {
        let price = fruit.price * event; // 0.7 * 1 = 0.7 ou 0.7 * -1 = -0.7
        setTotal({ price: total.price + price, quantity: total.quantity + event });
    }

    return (
        <>
            <div className="greengrocer">
                {fruits.map((fruit, index) => <Fruit key={index} fruit={fruit} onTotal={(event) => updateTotal(event, fruit)} />)}
            </div>
            {total.quantity > 0 && <p>Total: {total.price} € pour {total.quantity} produits</p>}
        </>
    );
}

export default Greengrocer;
