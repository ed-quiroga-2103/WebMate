
import React, {useState} from "react";

export const MainContext = React.createContext();

export const MainProvider = (props) => {
    const [device, setDevice] = useState("");

    return(
        <MainContext.Provider value={[device,setDevice]}>
            {props.children}
        </MainContext.Provider>
    )
}