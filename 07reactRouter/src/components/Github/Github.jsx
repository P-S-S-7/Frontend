import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(props) {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    
    // useEffect(() => {   
    //     fetch('https://api.github.com/users/P-S-S-7')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //         })
    // } , [])

    return (
        <>
            <div className='bg-gray-200 p-4 text-center' style={{ maxWidth: '300px', margin: 'auto' }}>
            <p style={{ fontSize: '12px' }}>Github Followers: {data.followers}</p>
            <p style={{ fontSize: '12px' }}>Github username: {data.name}</p>
            <img src={data.avatar_url} alt='avatar' style={{ width: '100%', maxWidth: '200px', height: 'auto'}} />
        </div>

        </>

    )
}

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/P-S-S-7')
    const data = await response.json()
    return data
}