import { fetchUserNotes } from '../api'

export const getUserNotes = () => async (dispatch) => {
    try {
        const { data } = await fetchUserNotes()
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (err) {
        console.log(err.message)
    }
}