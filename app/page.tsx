"use client";
import WidgetNavContainer from "@/components/WidgetNavContainer";
import WidgetArea from "@/components/WidgetArea";
// CUSTOM COMPONENTS
import StickyNote from "@/components/StickyNote";
import StickyNoteButton from "@/components/StickyNoteButton";
import TaskTracker from "@/components/TaskTracker";
import TaskTrackerButton from "@/components/TaskTrackerButton";
import { useState } from "react";

export default function Home() {
    const [isTaskTrackerVisible, setIsTaskTrackerVisible] = useState(true);

    const toggleTaskTracker = () => {
        setIsTaskTrackerVisible(!isTaskTrackerVisible);
    };

    return (
        <div className="flex flex-col">
            <main className="h-[90vh]">
                <StickyNote />
                {isTaskTrackerVisible && <TaskTracker />}
            </main>
            <nav id="widget-nav-horizontal" className="flex justify-center">
                <ul>
                    <StickyNoteButton />
                    <TaskTrackerButton toggleTaskTracker={toggleTaskTracker} />
                </ul>
            </nav>
        </div>
    );
}
