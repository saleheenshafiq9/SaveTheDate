import * as actionTypes from './actionTypes';
import axios from 'axios';

export const auth = (username, password) => dispatch => {
    const authData = {
        username: username,
        password: password,
    }
} 