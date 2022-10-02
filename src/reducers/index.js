import { combineReducers } from "redux";
import notesReducer from './notes'
import loginReducer from './login'
import registerReducer from './register'

export default combineReducers({ notes: notesReducer, login: loginReducer, register: registerReducer })