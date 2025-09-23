import "./EV.css";

export const EventPropogation = () => {
    const handleGrandParent = () =>{
        console.log("grand parent");
        
    }

    const handlePerent = () =>{
        console.log("parent node");
        
    }

    const handleChild = (event) =>{
        console.log(event);
        event.stopPropagation();
        console.log("child node");
        
    }

    return (
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>grandParent
            <div className="p-div" onClick={handlePerent}>Parent
            <div className="c-div" onClick={handleChild}>
            child root
            </div>
            </div>
            </div>
        </section>
    )

}