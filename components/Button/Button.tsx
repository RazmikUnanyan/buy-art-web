import React from 'react';
import cn from 'classnames'
import {ButtonProps} from "./Button.props";
import style from './Button.module.css'

const Button = ({ appearance, children, ...props}: ButtonProps):JSX.Element => {
   return (
       <button
           className={cn(style.button,{
               [style.primary]: appearance === "primary",
               [style.ghost]: appearance === "ghost",
           })}
           {...props}
       >
           {children}
       </button>
   )
};

export default Button;