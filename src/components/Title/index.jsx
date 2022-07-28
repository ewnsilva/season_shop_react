import React from 'react';
import './style.css';

const Titles = (props) => (

        <header>
                <h1 className={
                        `firstTitle ${props.size === "small" ? "firstTitle--size-small" : ""}`
                }>{props.title}</h1>
        </header>
)
export default Titles