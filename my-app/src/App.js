import logo from './logo2222.png';
import './App.css';
import {component} from "react"
class App extends component{
  constructor(){
    supper()
  
    this.state={
name:'Bahiran',
    };
  }
  render(){
    return(
      <div className='App'>
        <header className='App-header'>
          <img src='{logo}' className='App-logo' alt='logo'></img>
          <p> hello {this.state.name}</p>
          <button>changr the world</button>
        </header>

      </div>
    )
  }
}
