import { addSong, getSong } from "../services/song.api";
import { useContext } from "react";
import { SongContext } from "../SongContext";


export const useSong = () => {
    const context = useContext(SongContext)

    const {
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
    } = context

    async function handleGetSong({ mood }) {
        setLoading(true)
        try {
            const data = await getSong({ mood })
            setSongs(data.song || [])
            setCurrentSongIndex(0)
            setDetectedMood(mood)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching songs:", error)
            setLoading(false)
        }
    }

    async function handleAddSong(song,mood) {
        setLoading(true)
        const data = await addSong(song,mood)
        setSongs((prev)=>[data.song,...prev])
        setLoading(false)
    }

    return ({
        loading,
        songs,
        currentSong,
        currentSongIndex,
        handleGetSong,
        handleAddSong,
        playNextSong,
        playPreviousSong,
        playSong,
        detectedMood
    })

}