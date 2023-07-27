function Fruit({ fruit }) {
    return (
        <div className="fruit flex">
            <div>
                {fruit.name} au prix de {fruit.price} €
            </div>

            <div>
                <span className={`badge ${fruit.quantity > 0 ? 'in-stock' : 'not-in-stock'}`}>
                    {fruit.quantity > 0 ? 'En stock' : 'Rupture'}
                </span>
            </div>
        </div>
    );
}

export default Fruit;
