import { useContext } from "react"
import { BioContext } from "."

export const Home = () => {

    const {MyName, myAge} = useContext(BioContext);
    return (
        <h1>Hello context api! My name is {MyName}, I am {myAge} year old</h1>
    )
}