"use client";
// REACT IMPORTS
import { useState } from "react";
// MUI IMPORTS
import { Fab, Badge } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function YoutubeButton({ toggleYoutube }) {
    const [isBadgeInvisible, setIsBadgeInvisible] = useState(false);

    const toggleBadge = () => {
        setIsBadgeInvisible((prevState) => !prevState);
    };

    const clickHandler = () => {
        toggleYoutube();
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
                    aria-label="YouTube Widget"
                    sx={{ height: "80px", width: "80px" }}
                    onClick={clickHandler}
                >
                    <YouTubeIcon />
                </Fab>
            </Badge>
        </li>
    );
}
