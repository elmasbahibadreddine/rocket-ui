const API_HOST = import.meta.env.VITE_API_HOST

export default {
    // Auth
    login: `${API_HOST}/auth/login`,
    logout: `${API_HOST}/auth/logout`,
    register: `${API_HOST}/auth/register`,
    checkUsernameValidity: `${API_HOST}/auth/checkUsernameValidity`,
    // User Session
    fullname: `${API_HOST}/session/fullname`,
    username: `${API_HOST}/session/username`,
}