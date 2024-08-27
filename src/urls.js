const domaine = 'https://rocket-production-cf9c.up.railway.app'

export default {
    // Auth
    login: `${domaine}/auth/login`,
    logout: `${domaine}/auth/logout`,
    register: `${domaine}/auth/register`,
    checkUsernameValidity: `${domaine}/auth/checkUsernameValidity`,
    // User Session
    fullname: `${domaine}/session/fullname`,
    username: `${domaine}/session/username`,
}