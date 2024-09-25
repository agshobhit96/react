import React from 'react';

class MemberClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor called ", props);

        this.state = {
            count: 0,
            count2: 1,
            userState: {
              name: 'Shobhit',
              location: 'Bangalore'
            }
        }
    }

  async componentDidMount() {
    console.log("Component did mount");
    // API call
    const data = await fetch('https://api.github.com/users/agshobhit96');
    const jsonData = await data.json();

    this.setState({
      userState: jsonData
    });
    console.log("User data: ", jsonData);
  }

  render() {
    console.log("State Var ", this.state.userState);
    return (
    <div className="memberCard">
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
        <div>{this.props.location}</div> 
        <div>email</div>
        <div>{this.state.userState.name}</div>
        <p>{this.state.userState.location}</p>
        <div>count: {this.state.count} count1: {this.state.count2}</div>
        <button onClick={
            () => this.setState({count: this.state.count + 1})
          }>
          Increment</button>
    </div>
    
    );
  }
}

export default MemberClass;