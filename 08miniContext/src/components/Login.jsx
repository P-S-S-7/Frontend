import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault
        setUser({ username, password })
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSubmit}
                    className="p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
            </div>
        </>
    )
}
