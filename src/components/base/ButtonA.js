import React from "react";
import  propTypes from "prop-types"

export default function ButtonA({ text, clc = f => f }) {

    return (
        <button className="button" onClick={clc} >
            {
                text
            }
        </button>
    )
}

ButtonA.propTypes={
     text:propTypes.string.isRequired,
     clc:propTypes.func
}