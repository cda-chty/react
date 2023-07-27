import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store';

function About() {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    return (
        <>
            <h1>A propos</h1>
            {todos.map(todo =>
                <li>{todo.text}</li>
            )}
            <button onClick={() => dispatch(addTodo('Ranger'))}>
                Ajouter
            </button>
        </>
    );
}

export default About;
