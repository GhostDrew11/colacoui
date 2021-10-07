import React from 'react';
import {Card, CardMedia} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from '../images/test.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width:130,
        height:130,
    },
    labels: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        position: 'relative'
    },
    label1: {
        justifyContent: 'flex-start',
    },
    label2: {
        justifyContent: 'flex-end',
    },  
    media: {
        height: 0,
        paddingTop: "56.25%"
    }
}));

function SodaCard(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
            <Card className={classes.root} >
                <CardMedia className={classes.media} image={require('../images/soda.jpg')} title={props.soda.product_name}>

                </CardMedia>
            </Card>
          </div>
          <div className={classes.labels} >
            <div>
                {props.soda.product_name}
            </div>
            <div>
                ${props.soda.cost} 
            </div>
          </div>
        </div>
    )
}

export default SodaCard
