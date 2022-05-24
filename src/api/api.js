import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {"API-KEY": "de177116-1807-4616-af10-698c2641761e"}
});

export const usersAPI = {
    async getUsers(pageSize = 10, currentPage = 1) {
        const response = await instance.get(`/users?count=${pageSize}&page=${currentPage}`)
        return response.data
    }
}

export const followAPI = {
    async getUnfollow(userId) {
        const response = await instance.delete("/follow/" + userId)
        return response.data
    },
    async getFollow(userId) {
        const response = await instance.post("/follow/" + userId)
        return response.data
    }
}

export const authAPI = {
    async getAuthMe() {
        const response = await instance.get("/auth/me")
        return response.data
    },
    async login(email, password, rememberMe = false) {
        const response = await instance.post("/auth/login", {email, password, rememberMe})
        return response.data
    },
    async logout() {
        const response = await instance.delete("/auth/login")
        return response.data
    },
}

export const profileAPI = {
    async getProfile(userId) {
        const response = await instance.get("/profile/" + userId)
        return response.data
    },
    async getStatus(userId) {
        const response = await instance.get("/profile/status/" + userId)
        return response.data
    },
    async updateStatus(status) {
        const response = await instance.put("/profile/status/", {status})
        return response.data
    },
    async savePhoto(photoFile) {
        const bodyFormData = new FormData();
        bodyFormData.append('image', photoFile);
        const response = await instance.put("/profile/photo/", bodyFormData)
        return response.data
    },
    async saveProfile(profile) {
        const response = await instance.put("/profile/", profile)
        return response.data
    },
}
