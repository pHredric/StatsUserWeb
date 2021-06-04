import React, { Component } from 'react';
import StatsArea from './StatsArea/StatsArea';
import './Container.css';
import UsersArea from './UsersArea/UsersArea';

interface IContainerProps {
    
}

interface IContainerState {
  currenUser: string
}

class Container extends Component<IContainerProps,IContainerState> {
  constructor(props: IContainerProps) {
      super(props);
    this.state = {currenUser: 'Ej vald'};
  }
  userChanged = (name: string) => {
    this.setState( { currenUser: name } );
    console.log(`Container clicked ${name}`);
  }
  render() {
    return (
      <div id="Container">
      <h1>User Stats Web</h1>
      <UsersArea onUserChanged={this.userChanged} />
      <StatsArea currentUser={this.state.currenUser}/>
    </div>
    )
  }
}
  
export default Container;
