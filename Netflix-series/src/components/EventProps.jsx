export const EventProps = () =>{

    const HandleWelcomeUser = (user) =>{
        alert(`Hey ${user} welcome`)
    }

    const handleHover = () =>{
        alert("Hey hover me")
    }
    return(
        <>
        <WelcomeUser onClick={() => HandleWelcomeUser("vaishu")}
            onMouseEnter = {handleHover}></WelcomeUser>
        </>
        
    );

};

const WelcomeUser = (props) =>{

    const handleGreeting = () =>{
        console.log('hey greeting');
        props.onClick();
        
    }
    return (
    <>
    <button onClick={props.onClick}> Click me</button>
    <button onMouseEnter={props.onMouseEnter}>Hover me</button>
    <button onClick={handleGreeting}>Greeting</button>
    </>
    )
}