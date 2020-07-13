import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../dux/reducer';

class Nav extends Component {
    constructor(props){
        super(props);
            this.state = {
                helo_user: []
            }
        }

    handleLogout = () => {
        axios.get('/auth/logout')
        .then (() => {
            console.log(this.props)
        this.props.clearUser()
        })
        .catch(err => console.log(err, 'You up and did it'))
        }


  

render(){
        return (
            <div className='Nav'>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>
                                <button onClick={this.logout} >Logout</button></Link>
                        </li>
                        <li>
                            <Link to='/form'>New Posts</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
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