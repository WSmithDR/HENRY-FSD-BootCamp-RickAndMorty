import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/rickandmorty',
    timeout: 10000,
})

// Interceptor modificado
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        // Solo añadir header si hay token Y no es login
        if (token && !config.url.includes('/login')) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.href = '/'
        }
        return Promise.reject(error)
    }
)

export default api