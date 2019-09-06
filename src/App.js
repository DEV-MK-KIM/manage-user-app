import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(u => {
              return (
                <Customer
                  key={u.id}
                  id={u.id}
                  image={u.image}
                  name={u.name}
                  gender={u.gender}
                  job={u.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
