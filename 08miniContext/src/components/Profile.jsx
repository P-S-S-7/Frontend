import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export function Profile() {
    
    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-80 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Please login</h2>
            </div>
        )
    }

    return (
        <>  
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-80 mt-12">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <p className="mb-2">Username: {user.username}</p>
                <p className="mb-4">Password: {user.password ? "Yes" : "No"}</p>
            </div>
        </>
    )
}
