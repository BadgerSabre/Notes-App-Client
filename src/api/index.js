import axios from 'axios';

const url = 'https://notes-app-bdega-server.herokuapp.com/notes';
const authURL = 'https://notes-app-bdega-server.herokuapp.com/auth'

export const fetchUserNotes = (uid) => axios.get(`${url}/${uid}`)
export const login = (loginCredientials) => axios.post(`${authURL}/login`,loginCredientials)
export const register = (registerCredientials) => axios.post(`${authURL}/register`, registerCredientials);