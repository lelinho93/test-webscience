import api from './api'

const createUserApi = async (data) => {
    try {
        const response = await api.post('/public/v2/users', data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
            }
        })
        alert('User created with success!')
        console.log(response)
    } catch (error) {
        alert('A problem was ocurred, please try again')
        console.log(error)
    }
}

export default createUserApi