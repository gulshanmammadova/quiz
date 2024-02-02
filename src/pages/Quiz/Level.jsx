import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom';
const Level = () => {
    const location = useLocation()
let id=location.pathname.slice(location.pathname.length-2,location.pathname.length)
    return (
        <div>
            <h4>salaam bu level sehifesidir</h4>
            <Link to={`/test/${id}/A`}>
            <button>ASAN</button>
            </Link>
            <Link to={`/test/${id}/B`}>
            <button>ORTA</button>
            </Link>
            <Link to={`/test/${id}/C`}>
            <button>ÇƏTİN</button>
            </Link>

            {/* {console.log(id)} */}
        </div>
    );
};

export default Level;
