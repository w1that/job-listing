import React from 'react'
import styles from '../styles/TagItem.module.css'
import { mdiWindowClose } from '@mdi/js';
import Icon from '@mdi/react';

function TagItem({tag}) {
  return (
    <div className={styles.container}>
      <label>{tag}</label><button className={styles.closeButton}><Icon path={mdiWindowClose} size={1} /></button>
    </div>
  )
}

export default TagItem