import { memo, useRef } from "react"


 const Counts = () =>{
    const renderCount = useRef(0);
    console.log(renderCount);
    

    return (
        <>
        <div>
            <p>
                Nothing wil be change but Ive renderd:
            </p>
            <span> {renderCount.current++} {renderCount.current === 1 ? 'time' : 'times'}</span>
        </div>
        </>

    )
} 

export default memo(Counts);