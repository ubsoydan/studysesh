import { Fab, Badge } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function WidgetButtonWithBadge(props) {
    return (
        <li className="inline">
            <Badge badgeContent=" " color="success">
                <Fab
                    widgetid={props.widgetid}
                    aria-label="YouTube Widget"
                    sx={{ backgroundColor: "#FF0000" }}
                >
                    <YouTubeIcon sx={{ fontSize: 50 }} />
                </Fab>
            </Badge>
        </li>
    );
}
