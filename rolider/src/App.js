import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsiters:[
        {
          name:'fransitein',
          id:1
        },
        {
          name:'john doe',
          id:2
        },
        {
          name:'frankies',
          id:3
        }
      ]

    }
  }

  render(){
    return(
      <div className="App">
        {
          this.state.monsiters.map(monsiter=>
          <h1 key={monsiter.id}>{monsiter.name}
          </h1>)
        }
    </div>
    )

  }
}

export default App;