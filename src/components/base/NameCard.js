import React from "react";
import propTypes from "prop-types"

const NameCard = ({ children, toUpperCase = false }) => {

    return (
        <div className="name-card">
            {
                toUpperCase ? children.toUpperCase() : children
            }
        </div>
    )
}

export default NameCard

NameCard.propTypes = {
    children: propTypes.object.isRequired,
    toUpperCase: propTypes.bool
}