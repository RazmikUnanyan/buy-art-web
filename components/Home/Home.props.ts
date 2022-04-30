import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface HomeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imgUrls: string[];
    title: string;
    description: string;
    redirectToShop: () => void
}
