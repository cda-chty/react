import { useState } from 'react';

function StateChallenge() {
    const [animals, setAnimals] = useState([
        {
            name: 'Trolilo',
            type: 'troll'
        },
        {
            name: 'Sheep sheep',
            type: 'poisson'
        },
        {
            name: 'Donald Trump',
            type: 'orange'
        }
    ]);
    const [newAnimalType, setNewAnimalType] = useState('');
    const [newAnimalName, setNewAnimalName] = useState('');

    const saveAnimal = (event) => {
        event.preventDefault(); // Empêche le formulaire d'être envoyé
        let animal = { name: newAnimalName, type: newAnimalType };
        setAnimals([ ...animals, animal ]); // On ajoute l'animal dans le tableau
        setNewAnimalName(''); // On vide les champs
        setNewAnimalType('');
    };

    return (
        <div>
            <ul>
                <li>
                    Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom et son type.
                    <ul>
                        {animals.map(animal =>
                            <li>{animal.name} - {animal.type}</li>
                        )}
                    </ul>
                    <form action="">
                        <label htmlFor="type">Type</label>
                        <input id="type" type="text" value={newAnimalType} onChange={(event) => setNewAnimalType(event.target.value)} />
                        <label htmlFor="name">Nom</label>
                        <input id="name" type="text" value={newAnimalName} onChange={(event) => setNewAnimalName(event.target.value)} />
                        <button onClick={saveAnimal}>Ajouter</button>
                    </form>
                </li>
                <li>
                    Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur change, la valeur de newAnimalType est mise à jour.
                </li>
                <li>
                    Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le même fonctionnement.
                </li>
                <li>
                    Créer une fonction vide saveAnimal, et l'appeler depuis un bouton que vous créerez également.
                </li>
                <li>
                    Remplir la fonction saveAnimal tel que les valeurs newAnimalType et newAnimalName sont sauvegardées dans un nouvel objet animal,
                    que la fonction mette le tableau des animaux à jour en ajoutant le nouvel objet animal à la fin et qu'une fois que l'animal a été créé,
                    la fonction vide les champs newAnimalType et newAnimalName.
                </li>
                <li>Bon courage !</li>
            </ul>
        </div>
    )
}

export default StateChallenge;