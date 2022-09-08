import React from 'react'

const Socials = ({socials, styles}) => {
  return (
    <ul className={styles}>
        {socials.map((social) => {
            return (
                <li key={social.id}>
                    <a href={social.link} target="_blank"><img src={social.icon} alt="" /></a>
                </li>
            )
        })}
    </ul>
  )
}

export default Socials