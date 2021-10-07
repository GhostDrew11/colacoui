import './App.css';
import React, {useState,useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles} from "@material-ui/core/styles";
import SodaCard from './components/SodaCard';
import SodaForm from './components/SodaForm';

const useStyles = makeStyles((theme) => ({
  list: {
      display: "flex",
      justifyContent:'space-between',
      alignItems: 'flex-start',
      flexDirection: 'column-wrap',
      marginTop: "30px", 
      //marginLeft: "200px",
      marginRight: "100px",
  },
  mainpanel: {
    display:'flex',
    flexDirection: 'row',
  },
  secondpanel: {
    display: 'flex',
    flexDirection: 'column'
  },
  firstpanel: {
    display: 'flex',
    flexDirection: 'column'
  }

}));

function App() {

  const [sodas, setSodas] = useState([])
  const [isClicked, setClicked] = useState(false)

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
    <div className='App'>
      <div className={classes.mainpanel}>
        <div className={classes.firstpanel}>
          <div className='col'>
            <h1> Welcome to our Virtual Vending Machine Prototype</h1>
            <br/>
            <br/>
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
        <br/>
        {isClicked === true ?  
          <div className={classes.secondpanel}>
            <SodaForm/>
          </div> 
        : null }
      </div>
    </div>
    // <div className="App">
    //   <div className='col'>
    //     <h1> Welcome to our Virtual Vending Machine Prototype</h1>
    //     <br/>
    //     <br/>

    //     {/* {sodas && sodas.map((soda) => {
    //       return (
    //         <SodaCard soda={soda}/>
    //       )
    //     })} */}
    //   </div>
    //   <div className={classes.list}>
    //     {sodas && sodas.map((soda) => {
    //       return (
    //         <div key={soda.id}> 
    //           <SodaCard soda={soda}/>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
  );
}

export default App;
