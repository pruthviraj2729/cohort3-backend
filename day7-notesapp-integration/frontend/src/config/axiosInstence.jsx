import axios from 'axios'

export const axiosInstence = axios.create({
    baseURL: 'http://localhost:3000/notes/'
})