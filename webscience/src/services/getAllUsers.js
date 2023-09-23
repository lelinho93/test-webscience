import api from './api'

const getAllUsersApi = () => {
    return api.get('/public/v2/users', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    })  
}

export default getAllUsersApi