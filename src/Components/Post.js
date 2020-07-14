import React,  {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            title: '',
            content: '',
            postPic: ''
            
        }
    }

    componentDidMount(){
        this.getUserPosts()
        if(!this.props.helo_user.email){
            this.props.history.push('/dashboard');
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
   
    createPost = () => {
        console.log('hit')
        const {title, content, postPic} = this.state
        axios.post(`/api/post/${this.props.helo_user.id}`, {title, content, postPic})
        .then(() => {
            this.getUserPosts();
            this.setState({postPic: ''});
        })
        .catch(err => console.log(err));
    }

    getUserPosts = () => {
        axios.get(`/api/post/${this.props.helo_user.id}`)
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.log(err));
    }

    deletePost = (id) => {

      
        console.log(id)
        console.log(this.state.posts.id)
        axios.delete(`/api/post/${id}`)
        
        .then(() => {
            this.getUserPosts();
        })
        .catch(err => console.log(err))
    }


    render(){
        console.log(this.state.posts)
        const mappedPosts = this.state.posts.map((post, i) => { console.log(post)
            return( 
            <div className='postcard'key={i} >
                <img src={post.img} alt='HELO'className='post-image'/>
                <button onClick={() => this.deletePost(post.id)}>Delete</button>
            </div>
            
        )})
        
        return (
            <div>
                 <h1>Add Posts</h1>
                    {mappedPosts}
                   <input 
                    value={this.state.title}
                    name='title'
                    placeholder='Add Title'
                    onChange={(e) => this.handleInput(e)}/>
                
                <input
                    value={this.state.postPic}
                    name='postPic'
                    placeholder='Add Image URL'
                    onChange={(e) => this.handleInput(e)}/>
                
                <input 
                    value={this.state.content}
                    name='content'
                    placeholder='Add Content'
                    onChange={(e) => this.handleInput(e)}/>
                <button onClick={this.createPost}>Post</button>
               
                
                   
                
            </div> 
        ) 
    }
}

const mapStateToProps = (state) => {
    return{
        helo_user: state.helo_user
    }
};

export default connect(mapStateToProps)(Post);