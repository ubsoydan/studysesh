import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <button name={props.id} className="dark:md:hover:bg-fuchsia-600">
                {props.id}
            </button>
        </li>
    );
}
