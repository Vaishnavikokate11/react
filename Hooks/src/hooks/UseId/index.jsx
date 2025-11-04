import { useId } from "react"

export const UseIde = () => {
    // const usernameId = useId();
    // const emailId = useId();

    // return (
    //     <form>
    //         <div>
    //             <label htmlFor="username">Username:</label>
    //             <input type="text" id={usernameId} name="name"/>
    //         </div>

    //         <div>
    //             <label htmlFor="email">Email:</label>
    //             <input type="text" id={emailId} name="name"/>
    //         </div>
    //         <br/>
    //         <button>Submit</button>
    //     </form>
    // )


    //we write all id again and again for each input field



    const id = useId();
   

    return (
        <form>
            <div>
                <label htmlFor={id + "username"}>Username:</label>
                <input type="text" id={id + "usernameId"} name="name"/>
            </div>

            <div>
                <label htmlFor={id + "email"}>Email:</label>
                <input type="text" id={id + "emailId"} name="name"/>
            </div>
            <br/>
            <button>Submit</button>
        </form>
    )
}