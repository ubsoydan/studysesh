import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Card, Select, FormControl, MenuItem } from "@mui/material";

export default function Youtube() {
    const [streamId, setStreamId] = useState("kgx4WGK0oNU");
    const [youtubePos, setYoutubePos] = useState({});

    useEffect(() => {
        const customPosition = JSON.parse(localStorage.getItem("youtubePos"));
        customPosition
            ? setYoutubePos(customPosition)
            : setYoutubePos({ x: 100, y: 100 });
    }, []);

    useEffect(() => {
        localStorage.setItem("youtubePos", JSON.stringify(youtubePos));
    }, [youtubePos]);

    const updatePosition = (e, position) => {
        setYoutubePos({ x: position.x, y: position.y });
    };

    const handleChange = (event) => {
        setStreamId(event.target.value);
    };

    return (
        <Draggable position={youtubePos} onStop={updatePosition}>
            <div className="absolute">
                <Card sx={{ width: "480px", height: "392px" }}>
                    <h3 className="inline-block pr-10">LO-FI STATIONS</h3>
                    <FormControl
                        variant="standard"
                        size="small"
                        sx={{ minWidth: 140 }}
                        className="m-1 mt-1 inline-block"
                    >
                        <Select
                            id="lofi-selector"
                            value={streamId}
                            onChange={handleChange}
                        >
                            <MenuItem value="jfKfPfyJRdk">Lo-fi Girl</MenuItem>
                            <MenuItem value="kgx4WGK0oNU">Jazzy</MenuItem>
                            <MenuItem value="e3L1PIY1pN8">
                                Hip-hop Beats
                            </MenuItem>
                            <MenuItem value="7NOSDKb0HlU">
                                Chill Hip-hop
                            </MenuItem>
                            <MenuItem value="techmgGVOhk">Chill Beats</MenuItem>
                            <MenuItem value="e97w-GHsRMY">
                                Smooth Beats
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <iframe
                        width="480"
                        height="360"
                        src={`https://www.youtube.com/embed/${streamId}?autoplay=1`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className=" absolute"
                    />
                </Card>
            </div>
        </Draggable>
    );
}
