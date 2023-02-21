import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useBreakPoint from "./hooks/useBreakPoint";

function App() {
  const [size, setSize] = useState(0);
  let device = useBreakPoint(size);
  window.onresize = () => {
    setSize(window.innerWidth);
  };
    useEffect(() => {
        setSize(window.innerWidth)
    }, [])


  if (device === "mobile") {
    return (
      <>
        <p>mobile</p>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
      <p>desktop</p>
        <Outlet />
      </>
    );
  }
}

export default App;