import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ToggleButton } from "@mui/material";

export default function WidgetNav(props) {
    // ID props.id
    // KEY items for keys id

    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <ToggleButton
            name={props.id}
            size="large"
            sx={{ width: "100px", height: "100px" }}
            // Sortable DnD List related
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            {props.id}
        </ToggleButton>
    );
}
