import React from 'react';

import { typography } from '../styles/style';

const TimelineItem = ({title, subtitle, date}) => {
  return (
    <>
        <h4 className={`${typography.heading4}`}>{title}</h4>
        <p>{subtitle}</p>
        <small>{date}</small>
    </>
  )
}

export default TimelineItem