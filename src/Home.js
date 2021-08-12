import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Profile from './Profile';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Profile />
                </Grid>
                <Grid item xs={12}>
                   <h1>FullStack developer</h1> 
                </Grid>
                <Grid item xs={12}>
                   <h3>Professional Experience : 1 Year</h3> 
                </Grid>
                <Grid item xs={12}>
                   <h5>Lusaka, Zambia.</h5> 
                </Grid>
                <Grid item xs={12}>
                   <div>Focused on Design Patterns, Beautiful minimalist UI, and Data Structures and Algorithms.</div> 
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" color="primary">
                        SKILL SET
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" >
                       EDUCATION
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
