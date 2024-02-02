import React from 'react';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import tests from '../../data';

const Topic = () => {
    let topics = [
        { topicName: 'Movzu1', topicId: 'M1' },
        { topicName: 'Movzu2', topicId: 'M2' },
        { topicName: 'Movzu3', topicId: 'M3' },
        { topicName: 'Movzu4', topicId: 'M4' },
        { topicName: 'Movzu5', topicId: 'M5' }
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
            {topics.map(topic => (
                <Link key={topic.topicId} to={{ pathname: `/topic/${topic.topicId}`, state: { thisTopic } }}>
                    {/* <button key={topic.topicId} onClick={() => topicHandle(topic.topicId)}> */}
                  <button  key={topic.topicId}>
                        {topic.topicName}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default Topic;
