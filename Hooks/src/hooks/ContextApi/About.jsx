

import { useContext } from "react"
import { BioContext } from "."

export const About = () => {

    const {MyName, myAge} = useContext(BioContext);
    return (
        <h1>Hello context api about page! My name is {MyName}, I am {myAge} year old</h1>
    )
}