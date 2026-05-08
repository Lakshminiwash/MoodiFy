// import React from 'react'
import { useState } from "react"
import "../style/addsong.scss"
import { useRef } from "react"
import { useNavigate } from "react-router"
import { useSong } from "../hooks/useSongs"

const CreatePost = () => {

    const [mood, setMood] = useState("")
    const songFileInputFieldRef = useRef()
    const navigate = useNavigate()

    const { loading, handleAddSong } = useSong()

    async function handleSubmit(e) {
        e.preventDefault()
        const song = songFileInputFieldRef.current.files[0]
        await handleAddSong(song, mood)
        navigate(-1)
    }


    if (loading) {
        return (
            <main>
                <h1>Adding song...</h1>
            </main>
        )
    }

    return (
        <main>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h1>Add Song</h1>
                    <label htmlFor="songFile">Select file</label>
                    <input hidden ref={songFileInputFieldRef} accept="audio/*" type="file" id="songFile" name="songFile" />
                    <input value={mood} name="mood" id="caption" onChange={(e) => { setMood(e.target.value) }} type="text" placeholder="enter mood" />
                    <button type="submit">Add</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost