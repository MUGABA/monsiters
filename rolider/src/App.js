import React,{Component} from 'react';
import { CardList } from './components/card-list/cardList.component'
import { SearchBox } from './components/searchBox/searchBoxComponent'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      monsiters:[],
      searchField:''

    }
  }
  // life cycle methods
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsiters:users}))

  }
  // arrow functions refference the state to which it was created
  handleChange = (event) =>(
    this.setState({searchField:event.target.value})
  )

  render(){
    const { monsiters, searchField} = this.state
    const filterMonsters = 
      monsiters.filter(monsiter => 
        monsiter.name.toLowerCase()
          .includes(searchField.toLowerCase())
          )
    return(
      <div className="App">
        <h1>MONSTERS ROLEDEX</h1>
        <SearchBox
        placeholder = 'search monsters'
        handleChange = {this.handleChange}
        />
        <CardList monsiters = {filterMonsters}>
        </CardList>    
    </div>
    )
  }
}

export default App;