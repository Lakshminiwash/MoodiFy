import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import "./faceExpression.scss"


export default function FaceExpression({ onClick = () => { } }) {
    const navigate = useNavigate()
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detecting...");

    useEffect(() => {
        init({ landmarkerRef, videoRef, streamRef });

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    async function handleClick() {
        const expression = detect({ landmarkerRef, videoRef, setExpression })
        onClick(expression)
    }


    return (
        <div className="container">
            <button className="backButton" onClick={() => window.location.reload()}>Go Back</button>
            <div className="box">
                <video
                    ref={videoRef}
                    style={{ width: "400px", borderRadius: "12px" }}
                    playsInline
                />
                <h2>{expression}</h2>
                <button onClick={handleClick} >Detect expression</button>
            </div>
            <button className="addButton" onClick={() => navigate("/addSong")}>Add songs</button>
        </div>
    );
}