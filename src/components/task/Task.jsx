import React from 'react';

export const Task = ({ task,taskList, setTaskList }) => {
    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };
    return (
        <div　className="taskBox">
             <p className="taskText">{ task.text }</p>
             <button className="taskTrashButton">
                 <i className="fas fa-trash-alt" onClick={() => handleDelete(task.id)}></i>
            </button>
        </div>
    );
};

