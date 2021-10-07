import './App.css';
import React, {useState,useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles} from "@material-ui/core/styles";
import SodaCard from './components/SodaCard';

const useStyles = makeStyles((theme) => ({
  list: {
      display: "flex",
      justifyContent:'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginTop: "30px", 
      //marginLeft: "200px",
      marginRight: "400px",
  },
}));

function App() {

  const [sodas, setSodas] = useState([])

  const classes = useStyles();
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/sodas/', {
      'method':'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(resp => resp.json())
    .then(resp => setSodas(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <div className='col'>
        <h1> Welcome to our Virtual Vending Machine Prototype</h1>
        <br/>
        <br/>

        {/* {sodas && sodas.map((soda) => {
          return (
            <SodaCard soda={soda}/>
          )
        })} */}
      </div>
      <div className={classes.list}>
        {sodas && sodas.map((soda) => {
          return (
            <div key={soda.id}> 
              <SodaCard soda={soda}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
