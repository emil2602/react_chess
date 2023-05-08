import React, {FC} from 'react'

import { Figure } from '../../models/figures/Figure';

import styles from './LostFigures.module.scss';

interface LostFiguresProps {
  title: string;
  figures: Figure[]
}

const LostFigures: FC <LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className={styles.lostFiguresWrapper}>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id} className={styles.figure}>
          {figure.name} {figure.logo && <img src={figure.logo} alt={figure.name}/>}
        </div>
      ))}
    </div>
  )
}

export default LostFigures