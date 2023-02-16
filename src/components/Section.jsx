import React from "react";//Import Hook useState

//Create reusable component
const Section = ({ children }) => {
    return (
        <div style={{ margin: "50px" }}>
            {children}
        </div>
    );
};

export default Section;//Export component Section