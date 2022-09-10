import React from 'react';

import TimelineItem from './TimelineItem';

const Timeline = ({aboutInfoArray}) => {
  return (
    <ul className='ml-16 my-8'>
        {aboutInfoArray.map((aboutInfoItem, index) =>{
            return (
                <li key={aboutInfoItem.id} className={`${index !== aboutInfoArray.length - 1 ? 'mb-8' : ''} timeline-item text-left`}>
                    <TimelineItem {...aboutInfoItem} />
                </li>
            )
        })}
    </ul>
  )
}

export default Timeline