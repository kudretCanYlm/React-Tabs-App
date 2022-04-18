import React from "react"
import propTypes from "prop-types"

const TitleA = ({ children }) => {

    return (
        <div className="title">
            {
                children
            }
        </div>
    )
}

export default TitleA;

TitleA.propTypes={
    children:propTypes.object.isRequired
}