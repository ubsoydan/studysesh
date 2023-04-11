"use client";

// CUSTOM COMPONENTS
import StickyNote from "@/components/StickyNote";
import StickyNoteButton from "@/components/StickyNoteButton";
import TaskTracker from "@/components/TaskTracker";
import TaskTrackerButton from "@/components/TaskTrackerButton";
import PomodoroTimer from "@/components/PomodoroTimer";
import PomodoroTimerButton from "@/components/PomodoroTimerButton";
import Youtube from "@/components/Youtube";
import YoutubeButton from "@/components/YoutubeButton";
import Twitch from "@/components/Twitch";
import TwitchButton from "@/components/TwitchButton";
import { useEffect, useState } from "react";
// custom hooks
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
    const [isTaskTrackerVisible, setIsTaskTrackerVisible] = useState(true);
    const [isPomodoroTimerVisible, setIsPomodoroTimerVisible] = useState(true);
    const [isYoutubeVisible, setIsYoutubeVisible] = useState(true);
    const [isTwitchVisible, setIsTwitchVisible] = useState(true);
    const [stickyNotes, setStickyNotes] = useState([]);
    const [stickyNotesCounter, setStickyNotesCounter] = useState(
        stickyNotes.length
    );

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
        const newNote = {
            id: Date.now(),
            content: "",
            position: null,
        };
        setStickyNotes([...stickyNotes, newNote]);
    };

    const updateStickyNote = (id, content, position) => {
        const updatedNotes = stickyNotes.map((note) => {
            return note.id === id
                ? { ...note, content: content, position: position }
                : note;
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

    const toggleYoutube = () => {
        setIsYoutubeVisible(!isYoutubeVisible);
    };

    const toggleTwitch = () => {
        setIsTwitchVisible(!isTwitchVisible);
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
                        position={note.position}
                        updateStickyNote={updateStickyNote}
                        deleteStickyNote={deleteStickyNote}
                    />
                ))}
                {isTaskTrackerVisible && <TaskTracker />}
                {isPomodoroTimerVisible && <PomodoroTimer />}
                {isYoutubeVisible && <Youtube />}
                {isTwitchVisible && <Twitch />}
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
                    <YoutubeButton toggleYoutube={toggleYoutube} />
                    <TwitchButton toggleTwitch={toggleTwitch} />
                </ul>
            </nav>
        </div>
    );
}
