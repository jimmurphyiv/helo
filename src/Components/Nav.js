import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../dux/reducer';
import axios from 'axios';

class Nav extends Component {
    constructor(props){
        super(props);
            this.state = {
                helo_user: []
            }
        }

        componentDidMount(){
            this.logMeIn()
        }
        
        logMeIn = () => (
            axios.get('/api/me')
            .then(res => {
                this.props.getUser(res.data);
            })
            
        )
        handleLogout = () => {
            axios.get('/auth/logout')
            .then (() => {
           
            this.props.clearUser()
            })
            .catch(err => console.log(err, 'You up and did it'))
            }

render(){
        return (
            <div className='Nav'>
                <div>
                    <ul>
                        
                            <Link to='/'>
                                <button onClick={this.handleLogout} >Logout</button></Link>
                        
                        <li>
                            <Link to='/post'><button>New Posts</button></Link>
                        </li>
                        <li>
                            <Link to='/posts'><button>Dashboard</button></Link>
                        </li>
                    </ul>
                </div>
            </div> 
        ) 
    }
}
const mapStateToProps = (state) => {
    return{
        helo_user: state.helo_user
    }
}
export default connect(mapStateToProps, {getUser, clearUser})(Nav);