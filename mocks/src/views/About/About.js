import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
function About(){
  const base = "login";
  const [size, setSize] = useState(0);
  window.onresize = () => { setSize(window.innerWidth) };
  useEffect(() => {
    setSize(window.innerWidth)
  }, [])
  
  return (
    <div className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__body`}>
          <div className={`${base}__sidediv`}>
            <div className={`${base}__sidediv__container`}>
              
            </div>
          </div>
          <div className={`${base}__main`}>
            <div className={`${base}__main__section`}>

            </div>
            <div className={`${base}__main__section`}>
              <div className={`${base}__main__section__a`}>
              
              </div>
              <div className={`${base}__main__section__b`}>
              
              </div>
            </div>
          </div>
        </div>
        <div className={`${base}__footer`}>
          <div className={`${base}__footer__container`}>

          </div>
        </div>
      </div>
    </div>
  );
    
}

export default About;