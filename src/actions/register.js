import { register } from '../api'

export const registerUser = (registerCredientials) => async (dispatch) => {
    try {
        const { data } = await register(registerCredientials)
        dispatch({ type: 'POST', payload: data });
    } catch (err) {
        console.log(err.message)
    }
}