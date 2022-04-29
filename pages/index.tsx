import styles from '../styles/Home.module.css'
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import {useState} from "react";
import P from "../components/P/P";

export default function Home(): JSX.Element {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <Htag tag="h1">Компоненты<br/> в этом сезоне</Htag>
            <Htag tag="h1">buyArt</Htag>
            <Htag tag="h3">Футболка USA</Htag>
            <div style={{display: "flex"}}>
                <Htag tag="h3" style={{marginRight: 15}}>Home</Htag>
                <Htag tag="h3" style={{marginRight: 15}}>Shop</Htag>
                <Htag tag="h3">Contacts</Htag>
            </div>

            <Htag tag="h2">Новая коллекция</Htag>
            <Button appearance="primary" onClick={() => setOpen(prev => !prev)} arrow={open ? "down" : "right"}>
                Подробнее...
            </Button>
            <Htag tag="h2">Новая коллекция</Htag>
            <Button onClick={() => setOpen(prev => !prev)} appearance="ghost" arrow={open ? "down" : "right"}>
                Открыть магазин
            </Button>
            <P size="s">
                Полный курс по современному
                Frontend на React и
                Next.js. Всё от CSS Grid и
                TypeScript до React Hooks и SSR
            </P>
            <P size="m">
                Полный курс по современному
                Frontend на React и
                Next.js. Всё от CSS Grid и
                TypeScript до React Hooks и SSR
            </P>
            <P size="l">
                Полный курс по современному
                Frontend на React и
                Next.js. Всё от CSS Grid и
                TypeScript до React Hooks и SSR
            </P>
        </div>
    )
}
