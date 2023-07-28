import { useState } from 'react';
import Column from './Column';

function Vrello() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Faire la lessive', done: false },
        { id: 2, name: 'Promener son chien', done: false },
        { id: 3, name: 'Bosser sur un side business', done: false },
        { id: 4, name: 'Faire la cuisine', done: false },
        { id: 5, name: 'Désinstaller LoL', done: true },
    ]);
    const [newTask, setNewTask] = useState({ id: null, name: '', done: false });

    const addTask = (e) => {
        e.preventDefault();

        newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1; // Calcul de l'id avec le dernier ou 1 si aucun
        setTasks([ ...tasks, newTask ]);
        setNewTask({ ...newTask, name: '' });
    }

    const toggleTask = (id) => {
        let task = tasks.find(task => task.id === id);
        task.done = !task.done;
        setTasks([ ...tasks ]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="vrello">
            <form>
                <input type="text" value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
                <button onClick={(e) => addTask(e)} disabled={!newTask.name}>Ajouter</button>
            </form>
            <div className="flex">
                <Column title="A faire" tasks={tasks.filter(task => !task.done)} onCheck={(event) => toggleTask(event)}
                    onUpdate={(event) => updateTask(event)} />
                <Column title="Terminées" tasks={tasks.filter(task => task.done)} onCheck={(event) => toggleTask(event)}
                    onDelete={(event) => deleteTask(event)} />
            </div>
        </div>
    );
}

export default Vrello;
