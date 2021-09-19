import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd66327ed-6b77-485d-934e-ec9d8785c19c',
    },
})

export const globalAPI = {
    getUsers(pageSize, currentPage) {
        return instance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then(respons => respons.data)
    },
    unfollow(onID) {
        debugger
        return instance.delete(`follow/${onID}`).then(respons => respons.data)
    },
    follow(onID) {
        return instance.post(`follow/${onID}`).then(respons => respons.data)
    },
    profileInfo(id) {
        return instance.get(`profile/${id}`).then(respons => respons.data)
    },
}
