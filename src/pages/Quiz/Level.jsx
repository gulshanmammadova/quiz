import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom';
import  './Quiz.css'
const Level = () => {
    const location = useLocation()
let id=location.pathname.slice(location.pathname.length-2,location.pathname.length)
    return (
        <div>
<div className='level all-topics'>
<Link to={`/test/${id}/A`}>
            <button className='topic-btn'>ASAN</button>
            </Link>
            <Link to={`/test/${id}/B`}>
            <button className='topic-btn'>ORTA</button>
            </Link>
            <Link to={`/test/${id}/C`}>
            <button className='topic-btn'>ÇƏTİN</button>
            </Link>
</div>
         

            {/* {console.log(id)} */}
        </div>
    );
};

export default Level;
