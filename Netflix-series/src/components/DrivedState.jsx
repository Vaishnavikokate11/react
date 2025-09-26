import { useState } from "react"

export const DrivedState = () =>{
    const [users, setUsers] = useState([
    {name : "Alice", age: 25},
    {name: "Sham", age: 35},
    {name: "Aniket", age: 30}
    ]);

    //drived state total count of user
    const userCount = users.length;

    //drived state avrage age of user
    const averageAge = users.reduce((accum, curElm) => accum + curElm.age, 0)/ userCount;


    return (
        <>
        <div>
            <h1>Users list</h1>
            <ul>
                {users.map((user, index)=>(
                    <li key={index}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Avearage age: {averageAge}</p>
        </div>
        </>
    )
}