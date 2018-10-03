import * as React from "react";
import { SFC } from "react";
import { withStyles, createStyles, Theme, SwipeableDrawer } from "@material-ui/core";
import { connect } from "react-redux";
import { ILayoutState } from "../../store/layout/types";
import { IApplicationState } from "../../store";
import { Dispatch } from "redux";
import { ToggleMenu } from "../../store/layout/actions";
import classNames from 'classnames';
import { isMobile } from '../../tools/deviceDetection';
import TitleBar from "./TitleBar";


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
    drawerPaper: {
        width: drawerWidth,
        position: 'relative',
        height: '100%',
        flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    content: {
        marginLeft: -drawerWidth
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

const Layout: SFC<ILayoutProps> = ({ caption, version, layoutState, classes, onToggleMenu, children }) => {
    const mainClasses = classNames({
        [classes.content]: !layoutState.menuOpen && !isMobile()
    });

    return (
        <div className={classes.root}>
            <TitleBar
                caption={caption}
                version={version}
                isMobile={layoutState.mobileVersion}
                onToggleMenu={onToggleMenu}
                isSwipeable={false}
            />
            <SwipeableDrawer
                variant={isMobile() ? 'temporary' : 'persistent'}
                classes={{ paper: classes.drawerPaper }}
                open={layoutState.menuOpen}
                onOpen={onToggleMenu}
                onClose={onToggleMenu}
            >
                <TitleBar
                    caption={caption}
                    version={version}
                    isMobile={layoutState.mobileVersion}
                    onToggleMenu={onToggleMenu}
                    isSwipeable={true}
                />
                <div className={classes.toolbar} />
                <div>Drawer item</div>
            </SwipeableDrawer>
            <main className={mainClasses}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    )
}


const mapStateToProps = (state: IApplicationState) => ({
    layoutState: state.layout
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onToggleMenu: () => dispatch(ToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));