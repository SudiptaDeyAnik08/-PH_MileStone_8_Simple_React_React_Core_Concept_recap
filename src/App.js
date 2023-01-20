import logo from './logo.svg';
import './App.css';
import Power from './component/Power';

function App() {
  return (
    <div className="App">
     <Jela name="Dhaka"></Jela>
     <Jela name="Chottogram"></Jela>
      <Power name="Dhaka"></Power>
      <Power name="Chottogram"></Power>
    </div>
  );
}

 

const distric = {
  background:'yellow'
}

function Jela(props){
  return(
    <div style={distric}>
      <h2>Jela:{props.name}</h2>
    </div>
  )
}


export default App;
