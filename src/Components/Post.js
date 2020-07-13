import React,  {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            postPic: ''
        }
    }

    componentDidMount(){
        if(!this.props.helo_user.email){
            this.props.history.push('/dashboard');
        }
    }

    handleInput = (val) => {
        this.setState({postPic: val})
    }
   
    createPost = () => {
        const {title, postPic, content, id }
        axios.post('/api/post', {id: this.props.helo_user.author_id, postPic: this.state.postPic})
        .then(() => {
            this.getUserPosts();
            this.setState({postPic: ''});
        })
        .catch(err => console.log(err));
    }

    getUserPosts = () => {
        axios.get(`/api/posts/${this.props.helo_user.helo_user_id}`)
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.log(err));
    }

    deletePost = (id) => {
        axios.delete(`/api/post/${id}`)
        .then(() => {
            this.getUserPosts();
        })
        .catch(err => console.log(err))
    }


    render(){
        console.log(this.props.helo_posts)
        const mappedPosts = this.state.posts.map((post, i) => (
            <div className='post-box'>
                <img key={i} src={post.img} alt='HELO' className='post-image'/>
                <button onClick={() => this.deletePost(post.post_id)}>Delete</button>
            </div>
            
        ))
        
        return (
            <div>
                 <h1>Add Posts</h1>
                    {mappedPosts}
                   <input 
                    value={this.props.title}
                    placeholder='Add Title'
                    onChange={(e) => this.handleInput(e.target.value)}/>
                
                <input
                    value={this.props.postPic}
                    placeholder='Add Image URL'
                    onChange={(e) => this.handleInput(e.target.value)}/>
                
                <input 
                    value={this.props.content}
                    placeholder='Add Content'
                    onChange={(e) => this.handleInput(e.target.value)}/>
                <button onClick={this.createPost}>Post</button>
               
                
                   
                
            </div> 
        ) 
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Post);