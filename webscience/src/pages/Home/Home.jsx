import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import getAllUsersApi from '../../services/getAllUsers'

import '../../index.css'

export function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        getAllUsersApi().then(result => setData(result.data))
    }, [])

    return (
        <>
            <div id="sidebar">
                <div>
                    <Link to={'/create'}>
                        <button>New</button>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            {data ? data.map((item) => <Link to={`user/${item.id}`}>{item.name}</Link>) : <i>No users</i>}
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}