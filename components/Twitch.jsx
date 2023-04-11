import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Card, TextField } from "@mui/material";

export default function Youtube() {
    const [channel, setChannel] = useState("");
    const [twitchPos, setTwitchPos] = useState({});

    useEffect(() => {
        const customPosition = JSON.parse(localStorage.getItem("twitchPos"));
        customPosition
            ? setTwitchPos(customPosition)
            : setTwitchPos({ x: 400, y: 400 });
    }, []);

    useEffect(() => {
        localStorage.setItem("twitchPos", JSON.stringify(twitchPos));
    }, [twitchPos]);

    const updatePosition = (e, position) => {
        setTwitchPos({ x: position.x, y: position.y });
    };

    const handleChange = (event) => {
        setChannel(event.target.value);
    };

    return (
        <Draggable position={twitchPos} onStop={updatePosition}>
            <div className="absolute">
                <Card sx={{ width: "480px", height: "392px" }}>
                    <h3 className="inline-block pr-10">Twitch</h3>
                    <TextField
                        id="standard-size-small"
                        defaultValue={channel}
                        size="small"
                        variant="standard"
                        placeholder="Enter a channel name"
                        onChange={handleChange}
                    />
                    {channel ? (
                        <iframe
                            src={`https://player.twitch.tv/?channel=${channel}&parent=localhost`}
                            frameborder="0"
                            allowfullscreen="true"
                            height="360"
                            width="480"
                            className="absolute"
                        />
                    ) : (
                        <h3>
                            The channel name is the starting gate, <br /> Write
                            it and set off on a creative state!
                        </h3>
                    )}
                </Card>
            </div>
        </Draggable>
    );
}
