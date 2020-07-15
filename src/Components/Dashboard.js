import React,  {Component} from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
// import {getUser} from '../dux/reducer';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            editView: false
        }
    }
    // componentDidMount(){
    //     if(!this.props.username){
    //         this.props.history.push('/');
    //     }
    // }

    handleInput = (val) => {
        this.setState({username: val})
    }
    handleEditView = () => {
        this.setState({editView: !this.state.editView})
    }
    editUsername = () => {
        const {username} = this.state;
        axios.put(`/auth/edit/${this.props.helo_user.id}`, {username})
        .then(res => {
            this.props.getUser(res.data[0]);
            this.handleEditView();
            this.setState({username: ''});
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div className='dash'>
                
                <img 
                    className='profile-pic'
                    src={this.props.helo_user.profilePic}
                    alt={this.props.helo_user.username}/>
                {!this.state.editView
                ? <h2>{this.props.helo_user.username} <button id='edit-button' onClick={this.handleEditView}>Edit</button></h2>
                : (<div>
                    <input 
                        value={this.state.username}
                        placeholder='New Username'
                        onChange={(e) => this.handleInput(e.target.value)}/>
                    <button id='edit-button' onClick={this.updateUsername}>Submit</button>
                </div>)
                }
            </div>
        )
    } 

}

export default connect(state => state)(Dashboard);
