import api from "./api";

const getUserByIdApi = async (id) => {
    return api.get(`public/v2/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    })
}

export default getUserByIdApi