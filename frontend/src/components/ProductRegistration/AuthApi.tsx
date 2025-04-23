import axios from "axios"

const BASE_URL = "http://127.0.0.1:8000/api"
const LOGIN_URL =  "http://127.0.0.1:8000/api/token/"




export const login = async (username: string, password: string) => {
    const response = await axios.post(LOGIN_URL,
        {username:username, password:password},
        {withCredentials: true}
    )
    return response.data.success
}