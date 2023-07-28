import { useState } from 'react';

function Column({ title, tasks, onCheck, onUpdate, onDelete }) {
    const [editing, setEditing] = useState(null);

    return (
        <div className="column">
            <h2>{title} ({tasks.length})</h2>
            <div>
                {tasks.map((task, index) =>
                    <div className="task flex" key={index} onDoubleClick={() => onUpdate && setEditing(task)}>
                        {(!editing || editing.id !== task.id) && <span className={task.done ? 'done' : ''}>{task.name} ({task.id})</span>}
                        {editing && editing.id === task.id &&
                            <input type="text" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
                        }
                        <div>
                            <input type="checkbox" checked={task.done} onChange={() => onCheck(task.id)} />
                            {onDelete && <span className="delete" onClick={() => onDelete(task.id)}>🗑️</span>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Column;
