import axios from "axios";

axios.defaults.baseURL = "https://645a317a65bd868e9313ad5b.mockapi.io";

export const getUsersApi = async () => {
    try {
        const result = await axios.get('/users')
        return result.data
    } catch (e) {
        return Promise.reject(e.message)
    }
}

export const getUsersByPageApi = async () => {
    try {
        const result = await axios.get()
        return result
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