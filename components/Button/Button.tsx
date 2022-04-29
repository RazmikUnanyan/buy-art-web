import React from 'react';
import cn from 'classnames'
import {ButtonProps} from "./Button.props";
import style from './Button.module.css'
import ArrowIcon from './arrow.svg'

const Button = ({arrow = "none", appearance, children, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(style.button, {
                [style.primary]: appearance === "primary",
                [style.ghost]: appearance === "ghost",
                [style.important]: appearance === "important",
            })}
            {...props}
        >
            {children}
            {arrow !== "none" && (
                <span className={cn(style.arrow, {
                    [style.arrowRight]: arrow === "right",
                    [style.arrowDown]: arrow === "down",
                })}><ArrowIcon /></span>
            )}
        </button>
    )
};

export default Button;
