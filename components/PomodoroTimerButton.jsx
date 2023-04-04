"use client";
// REACT IMPORTS
import { useState } from "react";
// MUI IMPORTS
import { Fab, Badge } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function PomodoroTimerButton({ togglePomodoroTimer }) {
    const [isBadgeInvisible, setIsBadgeInvisible] = useState(false);

    const toggleBadge = () => {
        setIsBadgeInvisible((prevState) => !prevState);
    };

    const clickHandler = () => {
        togglePomodoroTimer();
        toggleBadge();
    };
    return (
        <li className="inline mx-4">
            <Badge
                badgeContent=" "
                color="success"
                invisible={isBadgeInvisible}
            >
                <Fab
                    aria-label="Sticky Note Widget"
                    sx={{ height: "80px", width: "80px" }}
                    onClick={clickHandler}
                >
                    <AccessAlarmIcon />
                </Fab>
            </Badge>
        </li>
    );
}
