import * as React from "react";
import { SFC } from "react";
import { AppBar, Toolbar, IconButton, Typography, withStyles, createStyles, Theme, SwipeableDrawer, Grid } from "@material-ui/core";
import { Menu as MenuIcon, ChevronLeft } from "@material-ui/icons";
import { connect } from "react-redux";
import { ILayout } from "../../store/layout/types";
import { IApplicationState } from "../../store";
import { Dispatch } from "redux";
import { ToggleMenu } from "../../store/layout/actions";
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

const drawerWidth = 300;
const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        margin: 0,
        padding: 0
    },
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
        width: drawerWidth,
        position: 'relative',
        height: '100%',
        flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
        marginLeft: 10,
        marginRight: 20
    },
    content: {
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    grow: {
        flexGrow: 1
    },
    version: {
        marginRight: 10
    }
});

interface ILayoutProps {
    children: any,
    classes: any,
    caption: string,
    version: string,
    layoutState: ILayout,
    onToggleMenu: typeof ToggleMenu
}

const Layout: SFC<ILayoutProps> = ({children, classes, caption, version, layoutState, onToggleMenu}) => {
    const mobile = isMobile || window.innerWidth <= 800

    const mainClasses = classNames({
        [classes.content]: !layoutState.menuOpen && !mobile
    });

    let versionTitle: JSX.Element;
    if (!mobile){
        versionTitle = <Typography color='inherit' variant='caption' noWrap className={classes.version}>Verze: {version}</Typography>
    }
    else {
        versionTitle = <div/>
    }

    return (
    <div className={classes.root}>
        <AppBar className={classes.appBar}>
            <Toolbar disableGutters>
                <IconButton color='inherit' onClick={onToggleMenu} className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography color='inherit' variant='title' noWrap className={classes.grow}>{caption}</Typography>
                {versionTitle}
            </Toolbar>
        </AppBar>
        <SwipeableDrawer variant={mobile?'temporary':'persistent'} classes={{paper: classes.drawerPaper}} open={layoutState.menuOpen} onClose={onToggleMenu} onOpen={onToggleMenu}>
            <AppBar className={classes.appBar}>
                <Toolbar disableGutters>
                    <IconButton color='inherit' onClick={onToggleMenu} className={classes.menuButton}>
                        <ChevronLeft />
                    </IconButton>
                    <Grid container direction='column'>
                        <Grid item><Typography color='inherit' variant='subheading' noWrap >{caption}</Typography></Grid>
                        <Grid item><Typography color='inherit' variant='caption' noWrap >Verze: {version}</Typography></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
            <div>Drawer item</div>
        </SwipeableDrawer>
        <main className={mainClasses}>
            <div className={classes.toolbar} />
            {caption}
            {children}
        </main>
    </div>
)}

const mapStateToProps = (state: IApplicationState) => ({
    layoutState: state.layout
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onToggleMenu: () => dispatch(ToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));