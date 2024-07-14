import React from 'react'
import { useParams } from 'react-router-dom'

export default function User(props) {
    
    const { userID } = useParams()

    return (
        <>
            <div className='bg-gray-200 p-4 text-center'> User : {userID} </div>
        </>
    )
}
