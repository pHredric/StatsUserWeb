import React, { Component } from 'react';
import './UsersArea.css';
import * as data from '../../Data/data';

interface IUserAreaProps {
    onUserChanged: (name:string) => void;
}

interface IUserAreaState {
    users: string[]
}

class UsersArea extends Component<IUserAreaProps,IUserAreaState> {
    constructor(props: IUserAreaProps) {
        super(props);
        this.state = { users: getUsersData().users }
    }
    clickedUser = (name: string) => {
        console.log(`Klickade på användare ${name}`);
        this.props.onUserChanged(name);
    }

    render() {
        return (
            <div id="usersArea">
                <h3>Users</h3>
                <ul>
                    {this.state.users.map(u => <li onClick={() => this.clickedUser(u)} key={u}>{u}</li>)}
                </ul>
            </div>
        )
    }
}

export default UsersArea;

function getUsersData() : UsersData {
    const users =  data.getAllUsers();
    const uData = new UsersData(users);
    return uData;
}

class UsersData {
    users: string[]
    constructor(allUsers: string[]) {
        this.users = allUsers;
    }
}