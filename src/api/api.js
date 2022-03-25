import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {"API-KEY": "de177116-1807-4616-af10-698c2641761e"}
});

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`/users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    getUnfollow(userId) {
        return instance.delete("/follow/" + userId)
            .then(response => response.data)
    },
    getFollow(userId) {
        return instance.post("/follow/" + userId)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get("/auth/me")
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get("/profile/" + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get("/profile/status/" + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put("/profile/status/", {status})
            .then(response => response.data)
    }
}
