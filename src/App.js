import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit* 3,
    overFlowX: 'auto'
  },
  table:{
    minWidth: 1080
  }
})  

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
      <Paper className="classes.root">
        <Table className="classes.table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
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
      </Paper>
    );
  }
}

export default withStyles(styles)(App)
