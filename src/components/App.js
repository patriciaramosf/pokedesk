import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json'
import PokeList from './PokeList'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:pokemons,
      random:0
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <PokeList dataList={this.state.data}
        />
      </div>
    );
  }
}

export default App;
