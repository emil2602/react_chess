import { Colors } from "../Colors";
import { Cell } from "../Cell";

import logo from '../../assets/img/king-black.png'

export enum FigureNames {
  FIGURE = '',
  KING = 'KING',
  QUEEN = 'QUEEN',
  ROOK = 'ROOK',
  BISHOP = 'BISHOP',
  KNIGHT = 'KNIGHT',
  PAWN = 'PAWN',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor (color: Colors, cell: Cell) {
    this.cell = cell;
    this.color = color;
    this.logo = null;
    this.cell.figure = this;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  isFigureCanMove (target: Cell) : boolean {
    if (target?.figure?.color === this.color) {
      return false;
    }

    if (target?.figure?.name === FigureNames.KING) {
      return false;
    }

    return true
  }

  moveFigure (target: Cell) {}
}