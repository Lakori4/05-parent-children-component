"use client"
import { useRouter } from "next/navigation";
import "./ContainerBackHome.css";
import { useState } from "react";


const ContainerBackHome = ({children} : {children?: React.ReactNode}) => {

    const router = useRouter();

    const [showInner, setShowInner] = useState<boolean>(false)

    return(
        <div onClick={() => {showInner ? setShowInner(false): null}} className="container">
           {/* <h1>This is a title in the outer container</h1> 
            <button onClick={() => { router.push("/")}}>Home</button>*/}
            
            {!showInner && <button onClick={() => {setShowInner(true); console.log(showInner)}}>Display lorem ipsum</button>}
            {showInner && 
                <div onClick={(e) => {e.stopPropagation()}} className="innerContainer">
                    {children}
                </div>
            }
        </div>
    )
}

export default ContainerBackHome