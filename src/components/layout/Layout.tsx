import * as React from "react";
import { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography, withStyles, createStyles, Theme, SwipeableDrawer, Grid } from "@material-ui/core";
import { Menu as MenuIcon, ChevronLeft } from "@material-ui/icons";
import { connect } from "react-redux";
import { ILayoutState } from "../../store/layout/types";
import { IApplicationState } from "../../store";
import { Dispatch } from "redux";
import { ToggleMenu } from "../../store/layout/actions";
import classNames from 'classnames';
import { isMobile } from '../../tools/deviceDetection';


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
    layoutState: ILayoutState,
    onToggleMenu: typeof ToggleMenu
}

class Layout extends Component<ILayoutProps> {
    public render() {
        const mainClasses = classNames({
            [this.props.classes.content]: !this.props.layoutState.menuOpen && !isMobile()
        });

        const versionTitle = <Typography color='inherit' variant='caption' noWrap className={this.props.classes.version}>Verze: {this.props.version}</Typography>

        return (
            <div className={this.props.classes.root}>
                <AppBar className={this.props.classes.appBar}>
                    <Toolbar disableGutters>
                        <IconButton color='inherit' onClick={this.props.onToggleMenu} className={this.props.classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography color='inherit' variant='title' noWrap className={this.props.classes.grow}>{this.props.caption}</Typography>
                        {!isMobile()?versionTitle:<div/>}
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer variant={isMobile()?'temporary':'persistent'} classes={{paper: this.props.classes.drawerPaper}} open={this.props.layoutState.menuOpen} onClose={this.props.onToggleMenu} onOpen={this.props.onToggleMenu}>
                    <AppBar className={this.props.classes.appBar}>
                        <Toolbar disableGutters>
                            <IconButton color='inherit' onClick={this.props.onToggleMenu} className={this.props.classes.menuButton}>
                                <ChevronLeft />
                            </IconButton>
                            <Grid container direction='column'>
                                <Grid item><Typography color='inherit' variant='subheading' noWrap >{this.props.caption}</Typography></Grid>
                                {isMobile()?<Grid item>{versionTitle}</Grid>:<div/>}
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <div className={this.props.classes.toolbar} />
                    <div>Drawer item</div>
                </SwipeableDrawer>
                <main className={mainClasses}>
                    <div className={this.props.classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state: IApplicationState) => ({
    layoutState: state.layout
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onToggleMenu: () => dispatch(ToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));