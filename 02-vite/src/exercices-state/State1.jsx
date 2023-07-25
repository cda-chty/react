import { useState } from 'react';

function State1() {
    const [name] = useState('Matthieu');
    const [cat] = useState({
        name: 'Bianca',
        age: 6,
    });
    const [song] = useState('Blue Monday');
    const [bananaNumber] = useState(6);

    return (
        <div>
            <p>Afficher la propriété name du state: {name}</p>
            <p>Afficher la propriété cat du state avec ses attributs</p>
            <div>
                <h2>{cat.name} a {cat.age} ans</h2>
            </div>
            <p>Créer une propriété song dans le state, donnez-lui la valeur de votre choix, et affichez-là ici: {song}</p>
            <p>Créer une propriété bananaNumber dans le state, donnez-lui la valeur de votre choix, et affichez-la ici: {bananaNumber}</p>
        </div>
    );
}

export default State1;
