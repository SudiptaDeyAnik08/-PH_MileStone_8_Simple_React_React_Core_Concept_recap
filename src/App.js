import logo from './logo.svg';
import './App.css';
import Power from './component/Power';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
     <Jela name="Dhaka"></Jela>
     <Jela name="Chottogram"></Jela>
      <Power name="Dhaka"></Power>
      <Power name="Chottogram"></Power>
      <LoadPost></LoadPost>
    </div>
  );
}

 function LoadPost(){

  const [post,setPost] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setPost(res))
  },[])


  return(
    <div>
      {
        post.map(singlePost => <SinglePost post={singlePost} key={singlePost.id}></SinglePost> )
      }
    </div>
  )
 }

 const SinglePost = (props)=>{
  return(
    <div className='SinglePost'>
      <h2>Title:{props.post.title}</h2>
      <p>Body: {props.post.body}</p>
    </div>
  )
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
