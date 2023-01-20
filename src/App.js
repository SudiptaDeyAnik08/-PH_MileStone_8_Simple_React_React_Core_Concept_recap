import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Jela name="Dhaka"></Jela>
     <Jela name="Chottogram"></Jela>
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
