import React from 'react'
import { Link } from 'react-router-dom'
const Topic = () => {
    let tests=[
        {
            topicName:'Movzu1',
            level:'Asan',
            topicId:'M1',
            levelId:'A',
            question:'En agilli insan kimdir?',
            answer:'Gulsen',
            allAnswer:['Gulshah','Gulchin','Gulay','Gulsen','Gulshan']
        },
        {
            topicName:'Movzu1',
            level:'Asan',
            topicId:'M1',
            levelId:'A',
            question:'En agilli aile uzvu kimdir?',
            answer:'Gulshanndi cavab',
            allAnswer:['Gulshah','Gulchin','Gulay','Gulshanndi cavab','Gulshan']
        },
        {
            topicName:'Movzu1',
            level:'Asan',
            topicId:'M1',
            levelId:'A',
            question:'En agilli aile uzvu kimdir caavb Gulsen3di?',
            answer:'Gulshanndi cavab',
            allAnswer:['Gulshah','Gulchin','Gulay','Gulsen3','Gulshan']
        },
        {
            topicName:'Movzu1',
            level:'Orta',
            topicId:'M1',
            levelId:'B',
            question:'cavab b herfi',
            answer:'b herfi',
            allAnswer:['b herfi','Gulchin','Gulay','Gulsen3','Gulshan']
        },
        {
            topicName:'Movzu1',
            level:'Orta',
            topicId:'M1',
            levelId:'B',
            question:'cavab a herfi',
            answer:'a herfi',
            allAnswer:['a herfi','Gulchin','Gulay','Gulsen3','Gulshan']
        },
        {
            topicName:'Movzu1',
            level:'Orta',
            topicId:'M1',
            levelId:'B',
            question:'cavab + herfi',
            answer:'+ herfi',
            allAnswer:['+ herfi','Gulchin','Gulay','Gulsen3','Gulshan']
        },
        {
            topicName:'Movzu1',
            level:'Orta',
            topicId:'M1',
            levelId:'C',
            question:'cavab 1',
            answer:'1',
            allAnswer:['+ herfi',1,'Gulay','Gulsen3','Gulshan']
        },
        {
            topicName:'Movzu1',
            level:'Orta',
            topicId:'M1',
            levelId:'C',
            question:'cavab 2',
            answer:'1',
            allAnswer:['+ herfi',1,'2','Gulsen3','Gulshan']
        }, 
        {
            topicName:'Movzu1',
            level:'Orta',
            topicId:'M1',
            levelId:'C',
            question:'cavab 17',
            answer:'17',
            allAnswer:['+ herfi',17,'Gulay','Gulsen3','Gulshan']
        }

    ]
    let topics=[{topicName:'Movzu1',topicId:'M1'},{topicName:'Movzu2',topicId:'M2'},{topicName:'Movzu3',topicId:'M3'},{topicName:'Movzu4',topicId:'M4'},{topicName:'Movzu5',topicId:'M5'}]
 const topicHandle=(topicId)=>{
    let onlyThisTopics=tests.filter(x=>x.topicId.trim().toLocaleUpperCase()==topicId.trim().toLocaleUpperCase())
console.log(onlyThisTopics)
 }
    return (
    <div>
         {topics.map(topic => (
                // <Link key={topic.topicId} to={`/topic/${topic.topicId} `}>
                    <button onClick={topicHandle(topic.topicId)}>
                    {topic.topicName}
                    </button>
                // </Link>
            ))}
    </div>
  )
}

export default Topic