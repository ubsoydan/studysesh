"use client";
// React lib imports
import { useState } from "react";
// DnD imports
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
// MUI imports
import { Card } from "@mui/material";
// Custom component imports
import TaskTrackerForm from "./TaskTrackerForm";
import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";

export default function TaskTracker() {
    // STATES
    const [tasks, setTasks] = useState([]);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // DRAGGING FEATURE
    const TaskTrackerPos = useSpring({ x: 0, y: 0 });
    const bindTaskTrackerPos = useDrag((params) => {
        TaskTrackerPos.x.set(params.offset[0]);
        TaskTrackerPos.y.set(params.offset[1]);
    });

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
        // This animated.div is DnD wrapper
        <animated.div
            {...bindTaskTrackerPos()}
            className="inline-block"
            style={{ x: TaskTrackerPos.x, y: TaskTrackerPos.y }}
        >
            <Card variant="outlined" sx={{ width: "350px", height: "420px" }}>
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
        </animated.div>
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
