"use client";
// REACT IMPORTS
import { useState } from "react";
// MUI IMPORTS
import { Fab, Badge } from "@mui/material";

export default function TwitchButton({ toggleTwitch }) {
    const [isBadgeInvisible, setIsBadgeInvisible] = useState(false);

    const toggleBadge = () => {
        setIsBadgeInvisible((prevState) => !prevState);
    };

    const clickHandler = () => {
        toggleTwitch();
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
                    aria-label="Twitch Widget"
                    sx={{ height: "80px", width: "80px" }}
                    onClick={clickHandler}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        />
                    </svg>
                </Fab>
            </Badge>
        </li>
    );
}
