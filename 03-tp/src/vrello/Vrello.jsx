import { useState } from 'react';

function Vrello() {
    const [tasks, setTasks] = useState([
        { name: 'Faire la lessive', done: false },
        { name: 'Promener son chien', done: false },
        { name: 'Bosser sur un side business', done: false },
        { name: 'Faire la cuisine', done: false },
        { name: 'Désinstaller LoL', done: true },
    ]);
    const [newTask, setNewTask] = useState({ name: '', done: false });

    const addTask = (e) => {
        e.preventDefault();

        setTasks([ ...tasks, newTask ]);
        setNewTask({ ...newTask, name: '' });
    }

    const toggleTask = (name) => {
        let task = tasks.find(task => task.name === name);
        task.done = !task.done;
        setTasks([ ...tasks ]);
    }

    return (
        <div className="vrello">
            <form>
                <input type="text" value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
                <button onClick={(e) => addTask(e)} disabled={!newTask.name}>Ajouter</button>
            </form>
            <div className="flex">
                <div className="column">
                    <h2>A faire ({tasks.filter(task => !task.done).length})</h2>
                    <div>
                        {tasks.filter(task => !task.done).map((task, index) =>
                            <div className="task flex" key={index}>
                                <span>{task.name}</span>
                                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.name)} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="column">
                    <h2>Terminées ({tasks.filter(task => task.done).length})</h2>
                    <div>
                        {tasks.filter(task => task.done).map((task, index) =>
                            <div className="task flex" key={index}>
                                <span>{task.name}</span>
                                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.name)} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vrello;
