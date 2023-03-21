import { Fab, Badge } from "@mui/material";

export default function WidgetButtonWithBadge(props) {
    return (
        <Badge badgeContent=" " color="success">
            <Fab
                widgetid={props.widgetid}
                aria-label="YouTube Widget"
                sx={{ height: "80px", width: "80px" }}
            ></Fab>
        </Badge>
    );
}
