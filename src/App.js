import React from 'react';

import MyApp from './FirstApp'

import Player from './AddPlayer'


class App extends React.Component {

  state = {
    player: [
      { name: 'jack', age: 23, id: '1' },
      { name: 'ruku', age: 22, id: '2' },
      { name: 'partho', age: 22, id: '3' },
      { name: 'pritom', age: 23, id: '4' }
    ]
  }

  AddPlayers = (player) => {
      player.id = Math.random()
      let Player = [...this.state.player, player]

      this.setState({ 
        player : Player
      })
  }

  render() {
    return (
      <div>
        <MyApp players={this.state.player} />
        <Player AddPlayers={this.AddPlayers} />
      </div>
    );
  }

}

export default App;
