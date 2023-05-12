import axios from "axios";

axios.defaults.baseURL = "https://645a317a65bd868e9313ad5b.mockapi.io";

export const getUsersAPI = async (page) => {
    const urlToGetUsers = new URL('https://645a317a65bd868e9313ad5b.mockapi.io/users');
    urlToGetUsers.searchParams.append('page', page);
    urlToGetUsers.searchParams.append('limit', 3);
    try {
        const result = await axios.get(urlToGetUsers)
        return result.data
    } catch (e) {
        return Promise.reject(e.message)
    }
}

export const updateFollowersApi = async (id, body) => {
    try {
        const result = await axios.put(`/users/${id}`, body);
        return result.data
    } catch (e) {
        return Promise.reject(e.message)
    }
}