import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function TaskItem({
    task,
    deleteTask,
    toggleTask,
    enterEditMode,
}) {
    const [isChecked, setIsChecked] = useState(task.isChecked);

    const handleIsChecked = (event) => {
        setIsChecked(!isChecked);
        toggleTask(task.id);
    };
    return (
        <li>
            <div>
                <FormControlLabel
                    label={task.name}
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={handleIsChecked}
                            name={task.name}
                            id={task.id}
                        />
                    }
                />
                <IconButton
                    aria-label={`Edit ${task.name} Task`}
                    onClick={() => enterEditMode(task)}
                >
                    <EditOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton
                    aria-label={`Delete ${task.name} Task`}
                    onClick={() => deleteTask(task.id)}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </li>
    );
}
