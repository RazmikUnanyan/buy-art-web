import React from 'react';
import cn from 'classnames';
import {PProps} from "./P.props";
import style from './P.module.css'

const P = ({children, size = "s", ...props}: PProps): JSX.Element => {
    return (
        <p {...props} className={cn(style.p, {
            [style.s]: size === "s",
            [style.m]: size === "m",
            [style.l]: size === "l",
        })}>
            {children}
        </p>
    )
};

export default P;
