import React from "react";

export default function Contact(props) {
    //props.match is from react-router
    console.log("Match ", props.match);
    return (
        <div>
            <h2>Contact Page {props.match.params.country}</h2>
        </div>
    )
}