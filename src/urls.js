import dotenv from 'dotenv'
dotenv.config()


export default {
    // Auth
    login: `${process.env.API_HOST }/auth/login`,
    logout: `${process.env.API_HOST }/auth/logout`,
    register: `${process.env.API_HOST }/auth/register`,
    checkUsernameValidity: `${process.env.API_HOST }/auth/checkUsernameValidity`,
    // User Session
    fullname: `${process.env.API_HOST }/session/fullname`,
    username: `${process.env.API_HOST }/session/username`,
}