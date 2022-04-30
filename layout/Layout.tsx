import React, {FunctionComponent} from 'react';
import style from './Layout.module.css'
import Header from './Header/Header';
import {LayoutProps} from "./Layout.props";
import SideBar from "./SideBar/SideBar";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={style.wrapper}>
            <Header className={style.header}/>
            <SideBar className={style.sidebar}/>
            <main className={style.main}>
                {children}
            </main>
        </div>
    )
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return (props: T): JSX.Element => (
        <Layout>
            <Component {...props}/>
        </Layout>
    );
};
