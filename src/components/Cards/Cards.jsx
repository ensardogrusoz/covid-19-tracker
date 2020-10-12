import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards= ( {data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loding...';
    }

    return(
    <div>
        <Grid container spaceing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.text, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography varient="h5">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of active cases of Covid-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.text, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography varient="h5">
                    <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of recoveries from Covid-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.text, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography varient="h5">
                    <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of deaths caused by Covid-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
        
    </div>
    )
}

export default Cards;