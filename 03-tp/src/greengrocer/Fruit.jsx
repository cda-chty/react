import { useState } from 'react';
import Quantity from './Quantity';

function Fruit({ fruit, onTotal }) {
    const [quantity, setQuantity] = useState(0);
    const updateQuantity = (event) => {
        setQuantity(quantity + event);
        onTotal(event);
    }

    return (
        <div className="fruit flex">
            <div>{fruit.name} au prix de {fruit.price} €</div>

            <div className="flex">
                {quantity > 0 && <span>{fruit.price * quantity} €</span>}
                {fruit.quantity > 0 && <Quantity quantity={quantity} max={fruit.quantity} onUpdate={(event) => updateQuantity(event)} />}
                <span className={`badge ${fruit.quantity > 0 ? 'in-stock' : 'not-in-stock'}`}>
                    {fruit.quantity > 0 ? 'En stock' : 'Rupture'}
                </span>
            </div>
        </div>
    );
}

export default Fruit;
