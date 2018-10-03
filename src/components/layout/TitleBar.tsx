import * as React from 'react';
import { SFC } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { ToggleMenu } from '../../store/layout/actions';
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, IconButton, Typography, Theme, createStyles, withStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
        marginLeft: 10,
        marginRight: 20
    },
    grow: {
        flexGrow: 1
    },
    version: {
        marginRight: 10
    }
});

interface ITitleBarProps {
    caption: string,
    version: string,
    isMobile: boolean,
    isSwipeable: boolean,
    onToggleMenu: typeof ToggleMenu,
    classes: any
}

const TitleBar: SFC<ITitleBarProps> = (props: ITitleBarProps) => {
    return (
        <AppBar className={props.classes.appBar}>
            <Toolbar disableGutters>
                <IconButton color='inherit' onClick={props.onToggleMenu} className={props.classes.menuButton}>
                    {props.isSwipeable ? <ChevronLeft /> : <MenuIcon />}
                </IconButton>
                {
                    props.isSwipeable || !props.isMobile
                        ?
                        <Grid container direction={props.isMobile ? "column" : "row"}>
                            <Grid item className={props.classes.grow}><Typography color='inherit' variant={props.isSwipeable ? 'subheading' : 'title'} noWrap className={props.classes.grow}>{props.caption}</Typography></Grid>
                            <Grid item><Typography color='inherit' variant='caption' noWrap className={props.classes.version}>Verze: {props.version}</Typography></Grid>
                        </Grid>
                        :
                        <div />
                }
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(TitleBar);