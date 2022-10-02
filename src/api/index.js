import axios from 'axios';

const url = 'http://localhost:5000/notes';
const authURL = 'http://localhost:5000/auth'

export const fetchUserNotes = (uid) => axios.get(`${url}/${uid}`)
export const login = (loginCredientials) => axios.post(`${authURL}/login`,loginCredientials)
export const register = (registerCredientials) => axios.post(`${authURL}/register`, registerCredientials);