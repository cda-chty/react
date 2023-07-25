import Button from './Button';
import List from './List';
import Text from './Text';
import State1 from './exercices-state/State1';
import State2 from './exercices-state/State2';
import State3 from './exercices-state/State3';
import StateChallenge from './exercices-state/StateChallenge';

function App() {
  return (
    <div>
      <h1>Vite + React</h1>
      <Button title="Valider" />
      <Button title="Ajouter" />
      <Button title="Envoyer" />

      <h2>Le cours</h2>
      <Text />
      <List />

      <h2>State 1</h2>
      <State1 />
      <h2>State 2</h2>
      <State2 />
      <h2>State 3</h2>
      <State3 />
      <h2>State challenge</h2>
      <StateChallenge />
    </div>
  );
}

export default App;
