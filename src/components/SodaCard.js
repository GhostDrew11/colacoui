import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


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
    // cardContainer: {
    //     backgroundImage: `url(${Image})`
    // }
}));

function SodaCard(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
            <Card className={classes.root}>
                <CardContent>
                
                </CardContent>
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
