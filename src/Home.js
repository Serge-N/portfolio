import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Profile from './Profile';
import Title from './Title';
import Experience from './Experience';
import Location from './Location';
import Intro from './Intro';
import {Alert} from '@material-ui/lab'

const useStyles = makeStyles(() => ({
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
                    <Title />
                </Grid>
                <Grid item xs={12}>
                    <Experience />
                </Grid>
                <Grid item xs={12}>
                    <Location />
                </Grid>
                <Grid item xs={12}>
                    <Intro />
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
                <Grid item xs={12}>
                    <Alert severity="error">This website is still under development!</Alert>
                </Grid>
            </Grid>
        </div>
    );
}
