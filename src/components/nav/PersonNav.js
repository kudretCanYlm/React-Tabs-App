import React, { useState } from "react"
import {
    Link,
    Outlet
} from "react-router-dom"
import propTypes from "prop-types"

export default function PersonNav({ persons = [], selected = 2 }) {

    //will change bottom

    const [personList, setPersonList] = useState(persons);

    return (
        <>
            <div className="persons">
                {
                    personList.length > 1 ? personList.map((person, number) => (
                        selected === number ?
                            <div className={"person selected"} >
                                <Link className="link" key={number} to={`/${person.name.toLowerCase()}`}  >
                                    {
                                        person.name
                                    }
                                </Link>
                            </div> :

                            <div className={"person"} >
                                <Link className="link" key={number} to={`/${person.name.toLowerCase()}`}  >
                                    {
                                        person.name
                                    }
                                </Link>
                            </div>
                    )) :
                        <div className={"person selected"} >
                            <Link className="link" key={0} to={`/${personList.name.toLowerCase()}`}  >
                                {
                                    personList.name
                                }
                            </Link>
                        </div>
                }
                <Outlet />
            </div>
        </>
    )
}

PersonNav.propTypes = {
    persons: propTypes.array.isRequired,
    selected: propTypes.number.isRequired
}

