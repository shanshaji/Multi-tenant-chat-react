import { apiBaseUrl } from '../../utils/rest-api'; 
import axios from 'axios';


export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_REDIRECTED = 'USER_REDIRECTED';

export default function signUpAction(data, history){
    return async (dispatch) => {
        const response = await axios.post(`${apiBaseUrl}/accounts`, data);
        setTimeout(() => {
            history.push('/log-in');
        }, 1000)
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: response
        });
    }
}

export function changeRedirectStatus(){
    return {
        type: USER_REDIRECTED
    }
}