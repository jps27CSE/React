import React from 'react';

import MyApp from './FirstApp'


class App extends React.Component {

  state = {
    player: [
      { name: 'jack', age: 23, id: '1' },
      { name: 'ruku', age: 22, id: '2' },
      { name: 'partho', age: 22, id: '3' },
      { name: 'pritom', age: 23, id: '4' }
    ]
  }

  render() {
    return (
      <div>
        <MyApp players={this.state.player} />
      </div>
    );
  }

}

export default App;
