import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import readHTML from '../../utils/html/reader';


function Content() {
    const base = 'admin';
    const navigate = useNavigate();
    const goTo = (event, where) => {
        event.stopPropagation();
        navigate(`/${where}`);
    };  

    const [searchParams] = useSearchParams()

    const ref = searchParams.get('ref')

    const path = atob(ref)

    console.log(ref, path)

    return (
        <div className='content-view'>
            <iframe className='content-frame' src={path}/>
        </div>
    );
}

export default Content;
