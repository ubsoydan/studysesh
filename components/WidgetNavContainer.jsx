"use client";

import {
    DndContext,
    closestCenter,
    DndContextProps,
    DragEndEvent,
} from "@dnd-kit/core";

import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import WidgetNav from "@/components/WidgetNav";

function WidgetNavContainer() {
    const [widgets, setWidgets] = useState([
        "Youtube",
        "Spotify",
        "Stickynote",
    ]);
    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={widgets}
                strategy={verticalListSortingStrategy}
            >
                <ul>
                    {widgets.map((widget) => (
                        <WidgetNav key={widget} id={widget} />
                    ))}
                </ul>
            </SortableContext>
        </DndContext>
    );

    function handleDragEnd(event) {
        console.log(event, "drag end called");
        const { active, over } = event;
        console.log("active:", active.id);
        console.log("over:", over.id);

        if (active.id !== over.id) {
            setWidgets((items) => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);
                return arrayMove(items, activeIndex, overIndex);
            });
        }
    }
}

export default WidgetNavContainer;
