import { Drawer } from "@material-ui/core";
import { SFC } from "react";
import * as React from "react";

const Sidebar: SFC = () => {
    return <Drawer variant='permanent'>
        <div>Drawer div</div>
    </Drawer>
}

export default Sidebar;