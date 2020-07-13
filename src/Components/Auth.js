import React,  {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../dux/reducer';


class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password:'',
            profilePic: '',
            registerView: false

        }
    }

    componentDidMount() {
        if(this.props.helo_user.email){
            this.props.history.push('/dashboard');
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.username]: e.target.value})
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView})
    }

    handleRegister = () => {
        const {username, email, password, profilePic} = this.state;
           axios.post('/auth/register', {username, email, password, profilePic})
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
       
                
     

    }

    handleLogin = () => {
        const {email, password} = this.state;
        axios.post('/auth/login', {email, password})
        .then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dashboard');
        })
        .catch(err => console.log(err));
    }




    render(){
        return (
            <div className='auth-container'>

            <section className='auth-info'>
            <h1>HELO</h1>

                <h3>Get with Helo Below</h3>
                    <input 
                        value={this.state.username}
                        name='username'
                        placeholder='Username'
                        onChange={(e) => this.handleInput(e)}/>
                 
                    <input 
                        type='password'
                        value={this.state.password}
                        name='password'
                        placeholder='Password'
                        onChange={(e) => this.handleInput(e)}/>
                    
                    <input 
                        value={this.state.email}
                        name='email'
                        placeholder='Email'
                        onChange={(e) => this.handleInput(e)}/>
                 
                    <input
                        value={this.state.picture}
                        name='pic'
                        placeholder='Profile image URL'
                        onChange={(e) => this.handleInput(e)}/>

          

                <button onClick={this.handleRegister}>Register</button>
                <p>No Account? <span onClick={this.handleToggle}>Hook it up Here!</span></p>
             

                <button onClick={this.handleLogin} >Login</button>
                <p>Already a Heloer? <span onClick={this.handleToggle}>Login Here</span></p>  
            </section> 
                        
        
        </div>
        ) 
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Auth);
