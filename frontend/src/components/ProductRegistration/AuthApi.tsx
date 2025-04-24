import axios from "axios"


const LOGIN_URL =  "http://127.0.0.1:8000/api/token/"
const REFRESH_URL =  "http://127.0.0.1:8000/api/token/refresh/"
const LOGOUT_URL = "http://127.0.0.1:8000/api/logout/"
const AUTH_URL = "http://127.0.0.1:8000/api/is_authenticated"
 


export const login = async (username: string, password: string) => {
    const response = await axios.post(LOGIN_URL,
        {username:username, password:password},
        {withCredentials: true}
    )
    return response.data.success
}

export const refresh_token = async () => {
    const response = await axios.post(REFRESH_URL,
        {},
        {withCredentials:true}
    )
    return response.data.refreshed
}

const call_refresh = async (error:any, func: any) => {
    if (error.response && error.response.status === 401) {
        const token_refreshed = await refresh_token();

        if (token_refreshed) {
            const retryResponse = await func()
            return retryResponse.data
        }
    }
    return false
}

export const logout = async () => {
    try {
        await axios.post(LOGOUT_URL, 
        {},
        {withCredentials:true}
        )
        return true
    } catch (error) {
        return false
    }
}

export const is_authenticated = async () => {
    try {
        await axios.post(AUTH_URL, 
            {},
            {withCredentials:true}
        )
        return true
    } catch (error) {
        return false

    }
}