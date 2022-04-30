import Home from "../components/Home/Home";
import React from "react";
import { withLayout } from "../layout/Layout";

function Main({}): JSX.Element {
    return (
        <Home imgUrls={[]} title="Просто купи, что нравится"
              description="Пакупка и продажа элементов искуство"
              redirectToShop={() => {
              }}
        />
    )
}

export default withLayout(Main)
