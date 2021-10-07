import './App.css';
import React, {useState,useEffect} from 'react';
import { makeStyles} from "@material-ui/core/styles";
import SodaCard from './components/SodaCard';
import OrderForm from './components/OrderForm';

const useStyles = makeStyles((theme) => ({
  list: {
      display: "flex",
      justifyContent:'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginTop: "30px", 
      marginRight: "100px",
  },
  mainpanel: {
    display:'flex',
    flexDirection: 'row',
  },
  secondpanel: {
    display: 'flex',
    flexDirection: 'column',

  },
  firstpanel: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: "300px",
  }

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
    .catch(error => alert(error))
  }, [])

  return (
    <div className='App'>
      <div className={classes.mainpanel}>
        <div className={classes.firstpanel}>
          <div className='col'>
            <h1> Welcome to our Virtual Vending <span style={{display:"block"}}>Machine Prototype</span></h1>
          </div>
          <div className='row'>
            {sodas && sodas.map((soda) => {
              return (
                <div key={soda.id} className='col-6 mb-4 mt-4' > 
                  <SodaCard soda={soda}/>
                </div>
              )
            })}
          </div>
        </div>
        <br/>
        <div className={classes.secondpanel}>
            <OrderForm/>
        </div> 
      </div>
    </div>
  );
}

export default App;
