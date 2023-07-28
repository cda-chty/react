function Quantity({ quantity, max, onUpdate }) {
    const updateQuantity = (value) => {
        onUpdate(value);
    }

    return (
        <div className="quantity">
            <button onClick={() => updateQuantity(-1)} disabled={quantity <= 0}>-</button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(1)} disabled={quantity >= max}>+</button>
        </div>
    );
}

export default Quantity;
