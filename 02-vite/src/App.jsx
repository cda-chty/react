import { useState } from 'react';
import Button from './Button';
import Clock from './Clock';
import List from './List';
import Text from './Text';
import State1 from './exercices-state/State1';
import State2 from './exercices-state/State2';
import State3 from './exercices-state/State3';
import StateChallenge from './exercices-state/StateChallenge';
import Lifecycle1 from './exercices-lifecycle/Lifecycle1';
import Lifecycle2 from './exercices-lifecycle/Lifecycle2';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Vite + React</h1>
      <Button title="Valider" />
      <Button title="Ajouter" />
      <Button title="Envoyer" />

      <h2>Le cours</h2>
      <Text />
      <List />

      {show && <Clock timezone="Europe/Paris" />}
      <button onClick={() => setShow(!show)}>
        Afficher / Cacher
      </button>
      <Clock timezone="Asia/Tokyo" />

      {/*<h2>State 1</h2>
      <State1 />
      <h2>State 2</h2>
      <State2 />
      <h2>State 3</h2>
      <State3 />
      <h2>State challenge</h2>
      <StateChallenge />*/}
      <h2>Lifecycle 1</h2>
      <Lifecycle1 />
      <h2>Lifecycle 2</h2>
      <Lifecycle2 />
    </div>
  );
}

export default App;
