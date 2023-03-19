import { Paper, TextField, InputBase, IconButton, Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function DragMe() {
    return (
        <Paper
            elevation={3}
            square={true}
            sx={{
                height: "200px",
                width: "200px",
                backgroundColor: "#F3E779",
            }}
        >
            <Box textAlign={"right"}>
                <IconButton aria-label="delete sticky note">
                    <DeleteForeverIcon fontSize="small" />
                </IconButton>
            </Box>
            <InputBase
                id="Sticky_Note"
                placeholder="Write down before you forget!"
                multiline
                rows={7}
                sx={{
                    marginX: "10px",
                }}
            />
        </Paper>
    );
}
