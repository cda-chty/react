import { useState } from 'react';

function Quantity({ max }) {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="quantity">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 0}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= max}>+</button>
        </div>
    );
}

export default Quantity;
