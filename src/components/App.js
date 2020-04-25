import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json'
import PokeList from './PokeList'
import Favourites from './Favourites'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getFav = this.getFav.bind(this)
    this.state={
      data:pokemons,
      random:0,
      favourites:[]
    }
  }
  getFav(myFav){
    this.setState(prevState => ({
      favourites: prevState.favourites + myFav
    }));
  }

  render() {
    console.log(this.state.favourites)
    return (
      <div className="App">
        <Header/>
        <PokeList dataList={this.state.data}
                  getFav={this.getFav}
                  favourites={this.state.favourites}
        />
        <Favourites favourites={this.state.favourites}
        />
      </div>
    );
  }
}

export default App;
