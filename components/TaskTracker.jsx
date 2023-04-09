"use client";
// React lib imports
import { useState } from "react";
// DnD imports
import Draggable from "react-draggable";
// MUI imports
import { Card } from "@mui/material";
// Custom hooks
import useLocalStorage from "../hooks/useLocalStorage";
// Custom component imports
import TaskTrackerForm from "./TaskTrackerForm";
import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";

export default function TaskTracker() {
    // STATES
    const [tasks, setTasks] = useLocalStorage(
        "StudySesh-Task_Tracker_Tasks",
        []
    );
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // TASK HANDLING FUNCTIONS
    const addTask = (task) => {
        setTasks((prevState) => [...prevState, task]);
    };

    const deleteTask = (taskId) => {
        setTasks((prevState) => prevState.filter((t) => t.id !== taskId));
    };

    const toggleTask = (taskId) => {
        setTasks((prevState) =>
            prevState.map((t) =>
                t.id === taskId ? { ...t, isChecked: !t.isChecked } : t
            )
        );
    };

    const updateTask = (task) => {
        setTasks((prevState) =>
            prevState.map((t) =>
                t.id === task.id ? { ...t, name: task.name } : t
            )
        );
        closeEditMode();
    };

    const closeEditMode = () => {
        setIsEditing(false);
        // TODO: FOCUS ON PREV STATE
    };

    const enterEditMode = (task) => {
        setEditedTask(task);
        setIsEditing(true);
        // TODO: FOCUS BACK TO ORIGINAL
    };

    return (
        <Draggable>
            <div className="absolute">
                <Card
                    variant="outlined"
                    sx={{ width: "350px", height: "420px" }}
                >
                    {isEditing && (
                        <TaskEdit
                            editedTask={editedTask}
                            updateTask={updateTask}
                            isEditing={isEditing}
                            closeEditMode={closeEditMode}
                        />
                    )}
                    <TaskTrackerForm addTask={addTask} />
                    {tasks && (
                        <TaskList
                            tasks={tasks}
                            deleteTask={deleteTask}
                            toggleTask={toggleTask}
                            enterEditMode={enterEditMode}
                        />
                    )}
                </Card>
            </div>
        </Draggable>
    );
}

/*
TASK TRACKER
1. add task -done
2. display tasks -done
3. cross off task 
4. delete task -done
5. edit task
*/
