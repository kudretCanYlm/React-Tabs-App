import ButtonA from "../components/base/ButtonA";
import PersonNav from "../components/nav/PersonNav";
import React, { useEffect, useState } from "react";
import NameCard from "../components/base/NameCard";
import Feature from "../components/Feature";
import DateCard from "../components/base/DateCard";
import TitleA from "../components/base/TitleA"

import { useParams } from "react-router-dom";
import PersonReducer from "../reducers/PersonReducer";
import {
    GET_FILTER,
    GET_FILTER_NAME
} from "../actions/BaseActions"


export default function PersonPage() {


    const params = useParams();
    params.personName = params.personName ? params.personName : "kudret";

    const [person, setPerson] = useState(PersonReducer([], { case: GET_FILTER, filter: params.personName })[0])
    const personNames = PersonReducer([], { case: GET_FILTER_NAME })

    useEffect(() => {
        setPerson(PersonReducer([], { case: GET_FILTER, filter: params.personName })[0]);
    }, [params.personName])

    return (
        <div className="person-page">
            <TitleA>
                {
                    "Experience"
                }
            </TitleA>
            <div className="person-page-content">
                <div className="nav">
                    <PersonNav persons={personNames} selected={person.id - 1} />
                </div>
                <div className="content">
                    <h1>{person.job}</h1>
                    <NameCard>
                        {
                            person.name
                        }
                    </NameCard>
                    <DateCard>
                        {
                            person.date
                        }
                    </DateCard>
                    {
                        person.features.length > 1 ? person.features.map((feature, key) => (
                            <Feature>
                                {
                                    feature
                                }
                            </Feature>
                        )) :
                            <Feature>
                                {
                                    person.features
                                }
                            </Feature>
                    }
                    <div className="content-btn" >
                        <ButtonA text="MORE DETAILS" />
                    </div>
                </div>
            </div>
        </div>
    )
}