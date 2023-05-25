import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useData<Genre>("/genres")

export default useGenres;


/**                            Removing the below code because we transferred it to generic function useData */
// interface FetchGenresResponse {
//     count: number;
//     results: Genre[];
// }

// const useGenres = () => {

//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false)

//     useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true)
//         apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
//             .then(res => {
//                 setGenres(res.data.results)
//                 setLoading(false)
//             })
//             .catch(err => {
//                 if (err instanceof CanceledError) return;
//                 setError(err.message)
//                 setLoading(false)
//             })
//         return () => controller.abort();
//     }, [])

//     return { genres, error, isLoading }
// }

// export default useGenres