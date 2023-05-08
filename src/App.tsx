import { useState, useEffect } from 'react'

import BoardComponent from './components/Board/BoardComponent';

import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';

import styles from './App.module.scss';

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whiteFigurePlayer] = useState(new Player(Colors.WHITE))
  const [blackFigurePlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
    setCurrentPlayer(whiteFigurePlayer)
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackFigurePlayer : whiteFigurePlayer)
  }

  return (
    <div className={styles.wrapper}>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        onSwitchPlayer={switchPlayer}
      />
    </div>
  )
}

export default App