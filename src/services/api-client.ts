import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0480d3f5994b4cf580178700f7e03258"
    }
})