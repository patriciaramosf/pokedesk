import React from 'react'
import '../stylesheets/App.scss'
import pokemons from '../data/pokemons.json'
import PokeList from './PokeList'
import Favourites from './Favourites'
import Header from './Header'
import chari from '../chari.svg'
import { Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getFav = this.getFav.bind(this)
    this.state = {
      data: pokemons,
      random: 0,
      favourites: [],
    }
  }
  getFav(myFav) {
    this.setState((prevState) => ({
      favourites: [...prevState.favourites, myFav],
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
          <nav className="menu">
            <Link to="/list"><h2 className="text-center">Pokemons</h2></Link>
            <Link to="/favourites"><h2 className="text-centerFav">My favourites</h2></Link>
          </nav>
        <img alt="charizar" className="principalPhoto" src={chari}/>
        </Route>
        <Route exact path="/favourites">
          <Favourites favourites={this.state.favourites} />
        </Route>
        <Route exact path="/list">
          <PokeList dataList={this.state.data} getFav={this.getFav} />
        </Route>
        </Switch>
      </div>
    )
  }
}

export default App
