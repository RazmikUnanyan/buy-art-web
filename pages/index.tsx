import styles from '../styles/Home.module.css'
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag="h1">Новые поступления<br/> в этом сезоне</Htag>
            <Htag tag="h3">
                Футболка USA
            </Htag>
            <Htag tag="h2">Новая коллекция</Htag>
            <Button appearance="primary" >Открыть магазин</Button>
            <Htag tag="h2">Новая коллекция</Htag>
            <Button appearance="ghost">Открыть магазин</Button>
        </div>
    )
}
