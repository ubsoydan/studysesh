import TaskItem from "./TaskItem";

export default function TaskList({
    tasks,
    deleteTask,
    toggleTask,
    enterEditMode,
}) {
    return (
        <ul>
            {tasks
                .sort((a, b) => b.id - a.id) //Place most recent tasks at top of the list
                .map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        enterEditMode={enterEditMode}
                    />
                ))}
        </ul>
    );
}
