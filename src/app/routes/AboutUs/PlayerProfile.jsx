import React, { Component } from 'react';
// Components
import Button from '@material-ui/core/Button';

class PlayerProfile extends Component {

  render() {
    // Extract data and event functions from props
    const { name, winCount, lostCount, onStartGame } = this.props;

    // Display welcome message,
    //         buttons for login / start game,
    //         number of winning and losing
    return (
      <span>{this.props.name}</span>
    )
  }
}

export default PlayerProfile;