import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai"
import propTypes from "prop-types"

const Feature = ({ children }) => {

    return (
        <div className="feature">

            <AiOutlineDoubleRight className="icon" />

            <div className="text">
                {
                    children
                }
            </div>

        </div>
    )
}

export default Feature;

Feature.propTypes = {
    children: propTypes.object.isRequired
}