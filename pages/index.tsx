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
            <Button onClick={() => setOpen(prev => !prev)} appearance="ghost">
                Открыть
            </Button>
            <Htag tag="h2">Новая коллекция</Htag>
            <Button appearance="important">
                Удалить
            </Button>
            <P size="s">
                Сайт www.facebook.com не позволяет установить соединение.
            </P>
            <P size="m">
                Сайт www.facebook.com не позволяет установить соединение.
            </P>
            <P size="l">
                Сайт www.facebook.com не позволяет установить соединение.
            </P>
        </div>
    )
}
