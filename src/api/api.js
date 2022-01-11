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
            .then((respons) => respons.data)
    },
    unfollow(onID) {
        return instance.delete(`follow/${onID}`).then((respons) => respons.data)
    },
    follow(onID) {
        return instance.post(`follow/${onID}`).then((respons) => respons.data)
    },
    profileInfo(id) {
        return instance.get(`profile/${id}`).then((respons) => respons.data)
    },
    setProfileMe() {
        return instance.get('auth/me').then((respons) => respons.data)
    },
    getProfileStatus(id) {
        return instance.get(`profile/status/${id}`).then((respons) => respons)
    },
    setStatus(status) {
        return instance
            .put('profile/status', { status })
            .then((respons) => respons)
    },
    login(email, password, rememberMe, captcha = null) {
        return instance
            .post('auth/login', { email, password, rememberMe, captcha })
            .then((respons) => respons.data)
    },
    logOut() {
        return instance.delete('auth/login').then((respons) => respons)
    },
    getCaptchaUrl() {
        return instance
            .get('/security/get-captcha-url')
            .then((respons) => respons)
    },
}
