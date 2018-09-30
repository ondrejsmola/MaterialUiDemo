import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import * as React from "react";
import { SFC } from "react";
import NavButton from './NavButton';

interface ITitleProps {
    classes: any
}

const styles = (theme: any) => ({
    menuButton: {
        marginLeft: -20
    },
	title : {
		zIndex: theme.zIndex.drawer + 1
	}
})

const Title : SFC<ITitleProps> = ({classes}) => {
    return <AppBar position='static' className={classes.title}>
        <Toolbar>
            <NavButton/>
            <Typography color='inherit' variant='title'>FMS</Typography>
        </Toolbar>
    </AppBar>
}

export default withStyles(styles)(Title);