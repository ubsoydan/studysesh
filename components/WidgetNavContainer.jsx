import { Box } from "@mui/material";
import WidgetButtonWithBadge from "@/components/WidgetButtonWithBadge";

export default function WidgetNavContainer() {
    const widgets = [
        "Youtube",
        "Spotify",
        "Stickynote",
        "Youtubdse",
        "Spotifdsy",
        "Stickyndsaote",
    ];
    return (
        <ul>
            {widgets.map((widget) => (
                <WidgetButtonWithBadge
                    key={widget}
                    widgetid={widget}
                ></WidgetButtonWithBadge>
            ))}
        </ul>
    );
}
