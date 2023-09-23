import React, { useEffect, useState } from 'react'
import { Form, Link, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import getUserByIdApi from '../../services/getUserDetails';

import '../../index.css'

export default function User() {
    const [userDetails, setUserDetails] = useState({})

    const { userId } = useParams()

    useEffect(() => {
        getUserByIdApi(userId).then(result => setUserDetails(result.data))
    }, [userDetails])

    return (
        <div id="user">

            <div>
                <h1>
                    {userDetails.name ? (
                        <>
                            <div>
                                <Stack direction="row" spacing={100}>
                                    <Avatar />
                                </Stack>
                            </div>
                            <Box sx={{ display: 'flex' }}>
                                {userDetails.name}
                            </Box>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>

                    )}
                </h1>
                <div>
                    <p>{userDetails.email}</p>
                    <p>{userDetails.gender}</p>
                </div>

                {<p>{userDetails.status}</p>}
                <div>
                    <Form action="edit">
                        <Link to={'/'}>
                            <button type="submit">Return</button>
                        </Link>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

