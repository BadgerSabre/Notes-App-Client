import { login } from '../api'

export const verifyLogin = (loginCredientials) => async (dispatch) => {
    const { data } = await login(loginCredientials)
    return dispatch({ type: 'POST', payload: data }).payload

    // try {
    //     const { data } = await login(loginCredientials)
    //     dispatch({ type: 'POST', payload: data });
    //     return 'testing return'
    // } catch (err) {
    //     console.log(err.message)
    // }
}