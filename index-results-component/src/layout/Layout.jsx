import React, { useEffect } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const Layout = ({ onStateChange }) => {

    useEffect(() => { }, []);

    return (
        <>
            <div className="body-container">
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    )
};
