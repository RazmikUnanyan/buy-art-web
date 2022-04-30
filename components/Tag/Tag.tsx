import React from 'react';
import cn from 'classnames';
import {TagProps} from "./Tag.props";
import style from './Tag.module.css'

const Tag = ({children, size = "m", color = "ghost", href, ...props}: TagProps): JSX.Element => {
    return (
        <div {...props} className={cn(style.tag, {
            [style.m]: size === "m",
            [style.l]: size === "l",
            [style.ghost]: color === "ghost",
            [style.red]: color === "red",
            [style.grey]: color === "grey",
            [style.green]: color === "green",
            [style.primary]: color === "primary",
        })}>
            {href
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    )
};

export default Tag;
