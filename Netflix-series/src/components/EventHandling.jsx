export const EventHandling = () =>{

    // function handleButtonClick(){
    //     alert("Hey i am on click event");
    // }

    const handleButtonClick = (event) =>{
         console.log(event);
         console.log(event.type);  //when we print event using console.log then by default instat object we get synthetic event
         alert("Hey i am click event")
    }

    const handleWelcomeUser = (user) =>{
        console.log(`Hello ${user}`);
        
    }


    return(
        <>
        {/**functions componentd with name function */} 
        <button onClick={handleButtonClick}>click me </button>
        <br></br>
        
        {/**flat arrow function - we pass event in function so we get synthetic  event */}
        <button onClick={(event)=> handleButtonClick(event)}>Click me 2</button>

        {/** inline event */}
        <button onClick={(event) => console.log(event)}> Inline Click event</button>

        <br></br>
        {/*  parameter pass in event*/}
        <button onClick={() => handleWelcomeUser("Vaishu")}> Click me as parameter</button>
        </>
    )
}