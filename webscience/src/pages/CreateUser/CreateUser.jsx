import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import createUserApi from '../../services/createUser';
import './CreateUser.css'


function CreateUser() {
    const [userData, setUserData] = React.useState({
        name: '',
        gender: '',
        email: '',
        status: 'active'

    })

    let submitDisabled = true

    if (userData.name && userData.gender && userData.email) {
        submitDisabled = false
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    };

    const handleSubmit = (data) => {
        createUserApi(data)
        setUserData({
            name: '',
            gender: '',
            email: '',
            status: 'active'
        })
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="main" sx={{ p: 3 }} >
                <div id='form-container'>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        WebScience - Create User
                    </Typography>
                    <TextField fullWidth value={userData.name} id="outlined-basic" name='name' label="Name" variant="outlined" margin="normal" onChange={handleChange} />
                    <TextField fullWidth value={userData.email} id="outlined-basic" name='email' label="Email" variant="outlined" margin="normal" onChange={handleChange} />
                    <FormControl fullWidth margin='normal'>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Gender"
                            name='gender'
                            value={userData.gender}
                            onChange={handleChange}
                        >
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                        </Select>
                        <div id='button-wrapper'>
                            <Button variant="contained" disabled={submitDisabled} onClick={() => handleSubmit(userData)}>
                                Submit
                            </Button>
                        </div>
                    </FormControl>
                </div>
            </Box>
        </Box>
    );
}

export default CreateUser;