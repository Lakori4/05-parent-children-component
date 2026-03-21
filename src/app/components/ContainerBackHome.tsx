"use client"
import { useRouter } from "next/navigation";
import "./ContainerBackHome.css";


const ContainerBackHome = ({children} : {children?: React.ReactNode}) => {

    const router = useRouter();

    return(
        <div className="container">
            <h1>Our little component</h1>
            <button onClick={() => { router.push("/")}}>Home</button>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ContainerBackHome