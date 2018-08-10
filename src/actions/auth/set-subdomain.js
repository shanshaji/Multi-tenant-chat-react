import axios from 'axios';
import { apiBaseUrl } from '../../utils/rest-api';
export const SET_SUBDOMAIN = 'SET_SUBDOMAIN';

export default function setSubdomain(subdomain,history){
    return async(dispatch) => {
        try{
            const response = await axios.post(`${apiBaseUrl}/accounts/set_subdomain`,subdomain);
            localStorage.setItem('subdomain', response.data.subdomain);
            dispatch({
                type: SET_SUBDOMAIN
            })
            history.push("/login")
        }
        catch(error){

        }
    }
}