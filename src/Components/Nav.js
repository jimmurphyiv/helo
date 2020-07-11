import React,  {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <div className='Nav'>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>New Post</li>
                        <li>Logout</li>
                        <li>
                            <Link to='/'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/form'>New Posts</Link>
                        </li>
                        <li>
                            <Link to='/auth'>Auth</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        ) 
    }
}
export default Nav;