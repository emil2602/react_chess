import React, { FC } from 'react'

import { Cell } from '../../models/Cell'

import styles from './Cell.module.scss'

interface CellProps {
  cell: Cell;
  selected: boolean;
  onCellClickHandler: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, selected, onCellClickHandler}) => {
  const cellClassName = `${styles.cell} ${cell.color} ${selected ? 'selected' : ''}`;

  return (
    <div
      className={cellClassName}
      onClick={() => onCellClickHandler(cell)}
    >
      {cell.avalible && !cell.figure && <div className={styles.avalible}/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
    </div>
  )
}

export default CellComponent