import { useState } from "react";

import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function TaskTrackerForm({ addTask }) {
    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            id: Date.now(),
            name: task,
            isChecked: false,
        });
        setTask("");
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    id="task"
                    required
                    autoFocus
                    autoComplete="off"
                    placeholder="Enter task"
                    variant="outlined"
                    label="Enter task"
                    inputProps={{ maxLength: 30 }}
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                />
                <Button type="submit" aria-label="Add Task">
                    <AddIcon fontSize="large" />
                </Button>
            </form>
        </div>
    );
}
