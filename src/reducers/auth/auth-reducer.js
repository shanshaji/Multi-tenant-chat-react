import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR} from '../../actions/auth/auth-actions';

export default function(state = {}, action) {
    switch (action.type){
        case AUTHENTICATED:
            const userType = localStorage.getItem('type');
            const userName = localStorage.getItem('user_name');
            const email = localStorage.getItem('email');
            const user = localStorage.getItem('user');
            return {...state, authenticated: true, userType: userType, firstName: userName, email: email, user: user}
        case UNAUTHENTICATED:
            return {...state, authenticated: false, userType: null}
        case AUTHENTICATION_ERROR:
            return {...state, authError: action.payload}
        default:
            return state
    }
    
}