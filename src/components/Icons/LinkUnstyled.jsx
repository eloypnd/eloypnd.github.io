import React from 'react'
import styles from './LinkUnstyled.module.css'

export default ({ children, href }) => (
  <a href={href} className={styles.unstyledLink}>{children}</a>
)
