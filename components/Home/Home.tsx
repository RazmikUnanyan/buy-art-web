import React from 'react';
import {HomeProps} from "./Home.props";
import style from './Home.module.css'
import Htag from "../Htag/Htag";
import P from "../P/P";
import Button from "../Button/Button";

const Home = ({imgUrls, description, title, redirectToShop, ...props}: HomeProps):JSX.Element => {
    return (
        <div className={style.home} {...props}>
            <div className={style.title}>
                <Htag tag="h2">{title}</Htag>
                <P size="l">{description}</P>
                <Button appearance="primary" onClick={redirectToShop}>Открыть магазин</Button>
            </div>
            <div className={style.top_product}>
                <img className={style.img1}
                     src="https://sun9-79.userapi.com/s/v1/if2/AntxITmnL7giLnUR0Q4nRfXHovXR6ZYfs6vdsIrE_D73ZVSIND7rLJK4p1bTFNKSEnW0_pultkX-00ClYvW6z0BK.jpg?size=1345x1600&quality=96&type=album"
                     alt="img1"/>
                <img className={style.img2}
                     src="https://sun9-74.userapi.com/s/v1/if2/5Its5LRPdupAu2Y0PIVPeahwsVhzbnhKoxS_ykCxdDizjbwXNW9mLQJ7SKwYSBLYDtK2-3GGEy5Y-ac1e86GlpnP.jpg?size=1080x1335&quality=96&type=album"
                     alt="img1"/>
                <img className={style.img3}
                     src="https://sun9-9.userapi.com/s/v1/if2/SL0L3JRZ4APeewu5g_FM2sTw-rRIypWCo19W6LyXITwSFVf9I2n8N0oDv5bQwBQWnDME5BDtXz52xw-2_jB5KbSz.jpg?size=1200x1600&quality=96&type=album"
                     alt="img1"/>
            </div>
        </div>
    )
};

export default Home;
