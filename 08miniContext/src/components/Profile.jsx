import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'

const Profile = () => {
    const {user} = useContext(UserContext)
 
    if  (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>

}

export default Profile
