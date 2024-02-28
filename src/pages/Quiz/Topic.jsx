import React from 'react';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import tests from '../../data';

const Topic = () => {
    let topics = [
        { topicName: 'Dövri qanun və dövri sistem', topicId: 'M1' },
        { topicName: 'Oksid,Əsas,Turşu,Duz', topicId: 'M2' },
        { topicName: 'Kimyəvi Rabitə', topicId: 'M3' },
        { topicName: 'Kimyəvi Reaksiya', topicId: 'M4' },
        { topicName: 'Valentlik,Oksidləşmə dərəcəsi', topicId: 'M5' }
    ];

    const [thisTopic, setThisTopic] = useState([]);
    

    
    const topicHandle = (topicId) => {
        let onlyThisTopics = tests.filter(x => x.topicId.trim().toUpperCase() === topicId.trim().toUpperCase());
       
        // setThisTopic([...onlyThisTopics]);
        
        // setThisTopic([...'salam'])
    };
    // console.log(thisTopic)
    return (
        <div>
         <div className='all-topics'>
         {topics.map(topic => (
                <Link key={topic.topicId} to={{ pathname: `/topic/${topic.topicId}`, state: { thisTopic } }}>
                    {/* <button key={topic.topicId} onClick={() => topicHandle(topic.topicId)}> */}
                  <button  key={topic.topicId} className='topic-btn'>
                        {topic.topicName}
                    </button>
                </Link>
            ))}
         </div>
        </div>
    );
};

export default Topic;
