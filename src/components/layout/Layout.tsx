import * as React from "react";
import { SFC } from "react";
import { AppBar, Toolbar, IconButton, Typography, withStyles, createStyles, Drawer, Theme } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { connect } from "react-redux";
import { ILayout } from "../../store/layout/types";
import { IApplicationState } from "../../store";
import { Dispatch } from "redux";
import { ToggleMenu } from "../../store/layout/actions";

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        height: '100%', // 440,
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
    }
});

interface ILayoutProps {
    children: any,
    classes: any,
    caption: string,
    layoutState: ILayout,
    onToggleMenu: typeof ToggleMenu
}

const Layout: SFC<ILayoutProps> = ({children, classes, caption, layoutState, onToggleMenu}) => {
    return (
    <div className={classes.root}>
        <AppBar className={classes.appBar}>
            <Toolbar disableGutters={true}>
                <IconButton color='inherit' onClick={onToggleMenu} className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography color='inherit' variant='title' noWrap={true}>{caption}</Typography>
            </Toolbar>
        </AppBar>
        <Drawer variant='persistent' classes={{paper: classes.drawerPaper}} open={layoutState.menuOpen}>
            <div className={classes.toolbar} />
            <div>Drawer item</div>
        </Drawer>
        <main className={!layoutState.menuOpen && classes.content}>
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