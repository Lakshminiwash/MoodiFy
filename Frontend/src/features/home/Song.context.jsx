import { useState } from "react";
import { SongContext } from "./SongContext";

export const SongContextProvider = ({ children }) => {

    const [songs, setSongs] = useState([])
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const [detectedMood, setDetectedMood] = useState(null)

    const currentSong = songs.length > 0 ? songs[currentSongIndex] : null

    const playNextSong = () => {
        if (currentSongIndex < songs.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1)
        }
    }

    const playPreviousSong = () => {
        if (currentSongIndex > 0) {
            setCurrentSongIndex(currentSongIndex - 1)
        }
    }

    const playSong = (index) => {
        if (index >= 0 && index < songs.length) {
            setCurrentSongIndex(index)
        }
    }

    return (
        <SongContext.Provider
            value={{
                loading,
                setLoading,
                songs,
                setSongs,
                currentSong,
                currentSongIndex,
                setCurrentSongIndex,
                playNextSong,
                playPreviousSong,
                playSong,
                detectedMood,
                setDetectedMood
            }}
        >
            {children}
        </SongContext.Provider>
    )

}