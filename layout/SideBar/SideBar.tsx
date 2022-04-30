import React from 'react';
import {SideBarProps} from "./SideBar.props";

const SideBar = ({...props}: SideBarProps): JSX.Element => {
    return (
        <div {...props} style={{fontWeight: "bold"}}>
            buyArt
        </div>
    )
};

export default SideBar;
