import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

import blackLogo from '../../assets/img/rook-black.png';
import whiteLogo from '../../assets/img/rook-white.png';

export class Rook extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
      this.logo = color === Colors.BLACK ?  blackLogo : whiteLogo;
      this.name = FigureNames.ROOK;
  }

  isFigureCanMove (target: Cell): boolean {
    if (!super.isFigureCanMove(target)) {
      return false
    }

    if (this.cell.isEmptyHorizontal(target)) {
      return true
    }

    if (this.cell.isEmptyVertical(target)) {
      return true
    }

    return false;
  }
}