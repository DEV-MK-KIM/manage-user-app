import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const users = [
  {
    id: 1,
    image: 'https://source.unsplash.com/random/100x64',
    name: 'MK',
    gender: 'Male',
    job: 'Dev'
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/100x64',
    name: 'Kim',
    gender: 'Male',
    job: 'Jr.Dev'
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/100x64',
    name: 'Hash',
    gender: 'Female',
    job: 'None'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {users.map(user=>{ return (<Customer key={user.id} id={user.id} image={user.image} name={user.name} gender={user.gender} job={user.job}/>)})}

      </div>
    );
  }
}

export default App;
