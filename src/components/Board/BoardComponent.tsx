import React, { FC, Fragment, useState, useEffect } from 'react'

import LostFigures from '../LostFigures/LostFigures';
import CellComponent from '../Cell/CellComponent';

import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';
import { Player } from '../../models/Player';

import styles from './Board.module.scss';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  onSwitchPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, onSwitchPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  const cellClickHandler = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.isFigureCanMove(cell)) {
      selectedCell.moveFigure(cell);
      onSwitchPlayer();
      setSelectedCell(null);
      updateBoard();
    } else if (cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(cell);
    }
  }

  function highlightCells () {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard)
  }

  return (
    <>
      <div className={styles.boardWrapper}>
        <h3>Your turn: {currentPlayer?.color}</h3>
        <div className={styles.board}>
          {board.cells.map((row, index) =>
            <Fragment key={index}>
              {row.map((cell) =>
                <CellComponent
                  key={cell.id}
                  cell={cell}
                  selected={cell?.x === selectedCell?.x && cell?.y === selectedCell?.y}
                  onCellClickHandler={cellClickHandler}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
      <div className={styles.lostFigures}>
        <LostFigures
          title={'Black Figures'}
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title={'White Figures'}
          figures={board.lostWhiteFigures}
        />
      </div>
    </>
  )
}

export default BoardComponent