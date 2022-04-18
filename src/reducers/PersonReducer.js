import {
    GET_ALL,
    GET_FILTER,
    GET_RANGE,
    GET_FILTER_NAME
} from "../actions/BaseActions"
import Enumerable from "linq";

const initState = [

    {
        id: 1,
        name: "Kudret",
        job: "Full Stack Web Developer",
        date: "December 2015 - Present",
        features:
            [
                "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra.",
                " Hammock photo booth live-edge disrupt. Post-ironic selvage chambray sartorial freegan meditation.",
                " Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
                "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy.",
                " Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",

            ]
    },
    {
        id: 2,
        name: "Can",
        job: "Front End Web Developer",
        date: "May 2012 - Present",
        features:
            [
                "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra.",
                " Hammock photo booth live-edge disrupt. Post-ironic selvage chambray sartorial freegan meditation.",
                " Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
                "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy.",
                " Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",

            ]
    },
    {
        id: 3,
        name: "Yalım",
        job: "Back End Web Developer",
        date: "June 2016 - Present",
        features:
            [
                "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra.",
                " Hammock photo booth live-edge disrupt. Post-ironic selvage chambray sartorial freegan meditation.",
                " Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
                "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy.",
                " Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",

            ]
    },

]





const PersonReducer = (state = [], action) => {
    switch (action.case) {
        case GET_ALL:
            return initState;

        case GET_FILTER_NAME:
            return Enumerable.from(initState).select(val => ({ name: val.name })).toArray()

        case GET_FILTER:
            return initState.filter(x=>x.name.toLowerCase()==action.filter)
        case GET_RANGE:

            break;

        default:
            break;
    }
}

export default PersonReducer;