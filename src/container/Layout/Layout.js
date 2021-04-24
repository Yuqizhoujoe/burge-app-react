import React, { Component } from 'react';
import Wrapper from "../../hoc/Wrapper";
import Header from "./Header/Header";

import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}

export default Layout;