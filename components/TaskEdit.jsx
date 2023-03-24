import { useState } from "react";

import { Button, TextField, Box, Modal } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function TaskEdit({ editedTask, updateTask, isEditing }) {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({ ...editedTask, name: updatedTaskName });
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal open={isEditing}>
                <Box sx={style}>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            id="editTask"
                            required
                            autoFocus
                            autoComplete="off"
                            placeholder="Update task"
                            variant="outlined"
                            label="Update task"
                            inputProps={{ maxLength: 50 }}
                            value={updatedTaskName}
                            onInput={(e) => setUpdatedTaskName(e.target.value)}
                        />
                        <Button
                            type="submit"
                            aria-label={`Confirm to update task to read ${updatedTaskName}`}
                        >
                            <CheckIcon />
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
