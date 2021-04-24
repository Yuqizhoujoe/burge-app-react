import React from 'react';
import {Button, PageHeader} from "antd";
import 'antd/dist/antd.css';

import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {
    return (
        <PageHeader
            className="site-page-header"
            // onBack={() => window.history.back()}
            title="Burger"
            // tags={<Tag color="blue">Running</Tag>}
            // subTitle="This is a subtitle"
            extra={[
                <Button key="2"><NavigationItem link="/" exact> Burger Builder </NavigationItem></Button>,
                <Button key="1"><NavigationItem link="/orders"> Orders </NavigationItem></Button>,
            ]}
        />
    );
}

export default Navigation;