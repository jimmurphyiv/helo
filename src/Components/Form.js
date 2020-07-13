import React,  {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            postImg: ''
        }
    }


    render(){
        return (
            <div>
                <h1>Form</h1>
            </div> 
        ) 
    }
}
export default Form;