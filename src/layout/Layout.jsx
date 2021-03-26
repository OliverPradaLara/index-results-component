import React, { useEffect } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";

export const Layout = ({ onStateChange }) => {
    useEffect(() => { }, []);

    return (
        <>
            <Header />
            <Container className="body-container" fluid>
                <Body />
                <Footer />
            </Container>

        </>
    )
};
