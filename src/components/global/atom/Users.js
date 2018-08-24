import React from 'react';
import fire from './fire';

class Users extends React.Component{
    constructor(){
        super();

        this.state = {
            email : '',
            name : ''
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = fire.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        db.collection('users').add({
            name: this.state.name,
            email: this.state.email
        })
        this.setState({
            name:'',
            email:''
        })
    }

    render(){
        return (
            <form onSubmit={this.addUser}> 
                <input
                    type="text"
                    name="name"
                    placeholder="user name"
                    onChange = {this.updateInput}
                    value = {this.state.name}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange = {this.updateInput}
                    value = {this.state.email}
                />  
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Users;