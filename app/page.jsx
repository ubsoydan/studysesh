"use client";

// CUSTOM COMPONENTS
import StickyNote from "@/components/StickyNote";
import StickyNoteButton from "@/components/StickyNoteButton";
import TaskTracker from "@/components/TaskTracker";
import TaskTrackerButton from "@/components/TaskTrackerButton";
import PomodoroTimer from "@/components/PomodoroTimer";
import PomodoroTimerButton from "@/components/PomodoroTimerButton";
import { useEffect, useState } from "react";
// custom hooks
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
    const [isTaskTrackerVisible, setIsTaskTrackerVisible] = useState(true);
    const [isPomodoroTimerVisible, setIsPomodoroTimerVisible] = useState(true);
    const [stickyNotes, setStickyNotes] = useState([]);
    const [stickyNotesCounter, setStickyNotesCounter] = useState(
        stickyNotes.length
    );
    const [zIndex, setZIndex] = useState("auto");

    // const [stickyNotes, setStickyNotes] = useLocalStorage(
    //     "StudySesh-Sticky_Notes",
    //     []
    // );

    useEffect(() => {
        // Load existing sticky notes from local storage on initial render
        const savedStickyNotes = JSON.parse(
            localStorage.getItem("stickyNotes")
        );
        savedStickyNotes ? setStickyNotes(savedStickyNotes) : null;
    }, []);

    useEffect(() => {
        // Save updated sticky notes to local storage whenever they change
        localStorage.setItem("stickyNotes", JSON.stringify(stickyNotes));
    }, [stickyNotes]);

    useEffect(() => {
        // Counter for stickyNoteButton component's badge
        // Update the count of sticky notes when any change on stickyNotes
        setStickyNotesCounter(stickyNotes.length);
    }, [stickyNotes]);

    const addNewStickyNote = () => {
        const newNote = { id: Date.now(), content: "" };
        setStickyNotes([...stickyNotes, newNote]);
    };

    const updateStickyNote = (id, content) => {
        const updatedNotes = stickyNotes.map((note) => {
            return note.id === id ? { ...note, content: content } : note;
        });
        setStickyNotes(updatedNotes);
    };

    const deleteStickyNote = (id) => {
        const updatedNotes = stickyNotes.filter((note) => note.id !== id);
        setStickyNotes(updatedNotes);
    };

    const toggleTaskTracker = () => {
        setIsTaskTrackerVisible(!isTaskTrackerVisible);
    };

    const togglePomodoroTimer = () => {
        setIsPomodoroTimerVisible(!isPomodoroTimerVisible);
    };

    // const createNewStickyNote = (note) => {
    //     setStickyNotes((prevState) => [...prevState, note]);
    // };

    return (
        <div className="flex flex-col">
            <main className="h-[90vh]">
                {stickyNotes.map((note) => (
                    <StickyNote
                        key={note.id}
                        id={note.id}
                        content={note.content}
                        updateStickyNote={updateStickyNote}
                        deleteStickyNote={deleteStickyNote}
                        onClick={() => setZIndex("1")}
                        zIndex={zIndex}
                    />
                ))}
                {isTaskTrackerVisible && <TaskTracker />}
                {isPomodoroTimerVisible && <PomodoroTimer />}
            </main>
            <nav id="widget-nav-horizontal" className="flex justify-center">
                <ul>
                    <StickyNoteButton
                        addNewStickyNote={addNewStickyNote}
                        stickyNotesCounter={stickyNotesCounter}
                    />
                    <TaskTrackerButton toggleTaskTracker={toggleTaskTracker} />
                    <PomodoroTimerButton
                        togglePomodoroTimer={togglePomodoroTimer}
                    />
                </ul>
            </nav>
        </div>
    );
}
