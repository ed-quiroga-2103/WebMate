import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/mainContext";
const useBreakPoint = (size) => {
    const [breakPoint, setBreakPoint] = useState("");
    const [device,setDevice] = useContext(MainContext)
    useEffect(() => {
        if(size<647){
            setBreakPoint("mobile");
            setDevice("mobile")
        }
        else{
            setBreakPoint("desktop");
            setDevice("desktop");
        }
    },[size]);
    return breakPoint;
}
export default useBreakPoint;