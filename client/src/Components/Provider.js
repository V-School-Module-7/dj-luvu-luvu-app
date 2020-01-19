import React, { useState } from 'react'
import axios from 'axios'

export const showAxios = axios.create()

showAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const ShowContext = React.createContext()

function ContextProvider(props) {
    const [userState, setUserState] = useState({
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || ''
    })
    const [shows, setShows] = useState([])

    const getShows = () => {
        return showAxios.get('/api/schedule')
            .then(res => {
                setShows(res.data)
                return res
            })
    }
    const addShow = (newShow) => {
        return showAxios.post('/api/schedule', newShow)
            .then(res => {
                getShows()
                return res
            })
    }
    const editShow = (showId, show) => {
        return showAxios.put(`/api/schedule/${showId}`, show)
            .then(res => {
                setShows(prev => {
                    const updatedShows = prev.map(show => {
                        return show._id === res.data._id ? res.data : show
                    })
                    setShows(updatedShows)
                })
                return res
            })
    }
    const deleteShow = (showId) => {
        return showAxios.delete(`/api/schedule/${showId}`)
            .then(res => {
                setShows(prev => {
                    const updatedShows = prev.filter(show => {
                        return show._id !== showId
                    })
                    return (updatedShows)
                })
                return res
            })
    }

    const signup = (userInfo) => {
        return axios.post('/auth/signup', userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prev => ({
                    ...prev, user, token
                }))
                return response
            })
    }
    const login = (credentials) => {
        return axios.post('/auth/login', credentials)
            .then(response => {
                const { token, user } = response.data
                localStorage.setItem('token', token)
                localStorage.setitem('user', JSON.stringify(user))
                setUserState(prev => ({
                    ...prev, user, token
                }))
                return response
            })
    }
    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setShows([])
        setUserState({
            user: {},
            token: ''
        })
    }

    return(
        <ShowContext.Provider
            value={{
                ...userState,
                shows,
                getShows,
                addShow,
                editShow,
                deleteShow,
                signup,
                login,
                logout
            }} >
            { props.children }
        </ShowContext.Provider>
    )
}

export { ContextProvider, ShowContext }