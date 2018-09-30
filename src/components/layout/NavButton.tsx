import { IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { SFC } from "react";

interface INavButtonProps {
    classes: any
}

const styles = {
    navButton: {
        marginLeft: -8,
        marginRight: 20
    }
}

const NavButton: SFC<INavButtonProps> = ({classes}) => {
    return <IconButton color='inherit' className={classes.navButton}>
        <Menu />
    </IconButton>
}

export default withStyles(styles)(NavButton);