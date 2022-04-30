import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface StarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isActiveStar: boolean;
    starCounter: number;
    setStarCounter: (starCounter: number) => void
}
