import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: "primary" | "ghost" | "important"
    children: ReactNode;
    arrow?: "right" | "down" | "none"
}
