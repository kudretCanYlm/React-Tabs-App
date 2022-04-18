import React from "react";
import propTypes from "prop-types"

const DateCard = ({ children }) => {

    return (
        <div className="date-card">
            {
                children
            }
        </div>
    )
}
export default DateCard;

DateCard.propTypes={
    children:propTypes.object.isRequired
}