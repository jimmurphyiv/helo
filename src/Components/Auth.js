import React,  {Component} from 'react';
import axios from 'axios';


class Auth extends Component {


    render(){
        return (
            <div className='auth-container'>
                <button>Register</button>
                <button>Login</button>                
            </div> 
        ) 
    }
}
export default Auth;
