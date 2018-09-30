import * as React from "react";
import { SFC } from "react";
import { AppBar, Toolbar, IconButton, Typography, withStyles, createStyles, Drawer, Theme } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

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
    toolbar: theme.mixins.toolbar
});

interface ILayoutProps {
    children: any,
    classes: any,
    caption: string    
}

const Layout: SFC<ILayoutProps> = ({children, classes, caption}) => {
    return <div className={classes.root}>
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton color='inherit'>
                    <MenuIcon />
                </IconButton>
                <Typography color='inherit' variant='title' noWrap={true}>{caption}</Typography>
            </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={true} classes={{paper: classes.drawerPaper}}>
            <div className={classes.toolbar} />
            <div>Drawer item</div>
        </Drawer>
        {caption}
        {children}
    </div>
}

export default withStyles(styles)(Layout);