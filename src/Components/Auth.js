import React,  {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../dux/reducer';


class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            email: '',
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
        this.setState({[e.target.name]: e.target.value})
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView})
    }

    handleRegister = () => {
        const {username, password, email, profilePic} = this.state;
           axios.post('/auth/register', {username,  password, email, profilePic})
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
                <h1>=HELO=</h1>
                    {this.state.registerView
                    ? (<>
                    <h3>Sign-up Here</h3>
                    <input 
                        value={this.state.username}
                        name='username'
                        placeholder='USERNAME'
                        onChange={this.handleInput}/>
                       </>)
                    : <h3>Login Below</h3>}
                    <input 
                        value={this.state.email}
                        name='email'
                        placeholder='EMAIL'
                        onChange={this.handleInput}/>
                    <input 
                        type='password'
                        value={this.state.password}
                        name='password'
                        placeholder='PASSWORD'
                        onChange={this.handleInput}/>
                    {this.state.registerView
                    ? (<>
                        <input
                        value={this.state.picture}
                        name='picture'
                        placeholder='PASTE PIC URL'
                        onChange={this.handleInput}/>

                    <button onClick={this.handleRegister}>REGISTER</button>
                    <p>Already a HELOer? <span onClick={this.handleToggle}><button>LOGIN</button></span></p>
                       </>)
                    : (<>
                    <button onClick={this.handleLogin}>LOGIN</button>
                    <p>No account? <span onClick={this.handleToggle}><button>HOOK IT UP!</button></span></p>
                </>)}
            </section>
                        
        
        </div>
        ) 
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Auth);
