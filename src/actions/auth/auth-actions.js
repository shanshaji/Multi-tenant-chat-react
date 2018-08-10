import axios from 'axios';
import { apiBaseUrl } from '../../utils/rest-api';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';


export default function signInAction(user,history){
    return async (dispatch) => {
        try{
            const response = await axios.post(`${apiBaseUrl}/authenticate`, user);
            localStorage.setItem('user', response.data.auth_token);
            localStorage.setItem('user_name', response.data.user.user_name);
            localStorage.setItem('email', response.data.user.email);
            axios.defaults.headers.common['Authorization'] = response.data.auth_token;
            dispatch({ type: AUTHENTICATED });
            history.push("/chat")
        }
        catch(error){
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: "Invalid Email or Password"
            })
        }
    }
}

export function signOutAction() {
    return{
        type: UNAUTHENTICATED
    };
}