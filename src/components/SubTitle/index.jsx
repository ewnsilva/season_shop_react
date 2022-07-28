import React from "react"
import './style.css';

const SubTitles = (props) => (
        <h2 className={
                `subTitle ${props.size === "small" ? "subTitle--size-small" : ""}
                `}>
                {props.subTitle}
        </h2>
)
export default SubTitles