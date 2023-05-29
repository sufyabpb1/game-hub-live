

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}


// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
//     useData<Game>("/games", {
//         params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id }
//     }, [selectedGenre?.id, selectedPlatform?.id])


/*               ***Before we used the above useGames function using 2 different params   */
/**      Now using the below one */

const useGames = (gameQuery: GameQuery) =>
    useData<Game>("/games", {
        params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id }
    }, [gameQuery])


export default useGames

/**                            Removing the below code because we transferred it to generic function useData */

// export interface FetchGamesResponse {
//     count: number;
//     results: Game[]
// }

// const useGames = () => {

//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false)

//     useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true)
//         apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
//             .then(res => {
//                 setGames(res.data.results)
//                 setLoading(false)
//             })
//             .catch(err => {
//                 if (err instanceof CanceledError) return;
//                 setError(err.message)
//                 setLoading(false)
//             })
//         return () => controller.abort();
//     }, [])

//     return { games, error, isLoading }
// }

// export default useGames