import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    root: {
        width:150,
        height:150,
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
    },
    content: {
        display: "flex",
        justifyContent: "center"
    }
}));

function SodaCard(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
            <Card className={classes.root} >
                    <CardContent className={classes.content}>
                        <Typography >
                            Image of the {props.soda.product_name} Soda to be diplayed.Not yet available!
                        </Typography>
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
