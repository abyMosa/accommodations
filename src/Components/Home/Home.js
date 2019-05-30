import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

const Home = (props) => {

    let value = props.value;
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Switch checked={props.value} onChange={ value => props.handleChange(value)} value={value} />
                </Grid>
                <Grid item xs={6}>wefewffwweffewffwe</Grid>
            </Grid>    
        </div>
    );
};

export default Home;