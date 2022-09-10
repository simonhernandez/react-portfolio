import React from 'react';

import TimelineItem from './TimelineItem';

const Timeline = ({aboutInfoArray}) => {
  return (
    <ul>
        {aboutInfoArray.map((aboutInfoItem, index) =>{
            return (
                <li key={aboutInfoItem.id} className={`${index === aboutInfoArray.length - 1 ? 'm-8' : ''}`}>
                    <TimelineItem {...aboutInfoItem} />
                </li>
            )
        })}
    </ul>
  )
}

export default Timeline