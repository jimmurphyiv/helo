import React,  {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <div className='Nav'>
                <div>
                    <ul>
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