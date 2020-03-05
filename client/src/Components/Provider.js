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
    const [ userState, setUserState ] = useState({
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || ''
    })
    const [ shows, setShows ] = useState([])
    const [ potentialShows, setPotentialShows ] = useState([])


// CRUD for new shows for Dan to enter
    const getShows = () => {
        return showAxios.get('/api/schedule')
            .then(res => {
                setShows(res.data)
                return res
            })
    }

     // STATE FOR MODAL
     const [showModal, setShowModal] = useState(false);
     const handleShow = () => setShowModal(true);
     const handleClose = () => setShowModal(false);

    const addShow = (newShow) => {
        // alert("This show has been added to the shows list. Please delete it from the Potential Show list")
        handleShow()
        return showAxios.post('/api/schedule', newShow)
            .then(res => {
                getShows()
                return res
            })
    }
    const addShowDan = (newShow) => {
        // alert("This show has been added to the Current Shows list. If the BLOCK OFF DATE box was checked then it will not show on the main homepage.")
        handleShow()
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

    
// CRUD for potential shows for Dan to approve or edit
    const getPotentialShow = () => {
        return showAxios.get('/api/potential')
            .then(res => {
                setPotentialShows(res.data)
                return res
        })
    }
    const addPotentialShow = (newPotentialShow) => {
        console.log(newPotentialShow)
        return showAxios.post('/api/potential', newPotentialShow)
            .then(res => {
                getPotentialShow()
                return res
            })
    }
    const editPotentialShow = (potentialShowId, potentialShow) => {
        return showAxios.put(`/api/potential/${potentialShowId}`, potentialShow)
            .then(res => {
                setPotentialShows(prev => {
                    const updatedPotentialShows = prev.map(potentialShow => {
                        return potentialShowId._id === res.data._id ? res.data : potentialShow
                    })
                    setPotentialShows(updatedPotentialShows)
                })
                return res
            })
    }
    const deletePotentialShow = (potentialShowId) => {
        return showAxios.delete(`/api/potential/${potentialShowId}`)
            .then(res => {
                setPotentialShows(prev => {
                    const updatedPotentialShows = prev.filter(potentialShow => {
                        return potentialShow._id !== potentialShowId
                    })
                    return (updatedPotentialShows)
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
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prev => ({
                    ...prev, user, token
                }))
                return response
            }) .catch(err => err)
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
                addShowDan,
                editShow,
                deleteShow,
                signup,
                login,
                logout,
                potentialShows,
                setPotentialShows,
                getPotentialShow,
                addPotentialShow,
                editPotentialShow,
                deletePotentialShow
            }} >
            { props.children }
        </ShowContext.Provider>
    )
}

export { ContextProvider, ShowContext }