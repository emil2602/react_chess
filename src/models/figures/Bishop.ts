import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/img/bichop-black.png';
import whiteLogo from '../../assets/img/bishop-white.png';

export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
      this.logo = color === Colors.BLACK ?  blackLogo : whiteLogo;
      this.name = FigureNames.BISHOP;
  }

  isFigureCanMove (target: Cell): boolean {
    if (!super.isFigureCanMove(target)) {
      return false
    }

    if (this.cell.isEmptyDiagonal(target)) {
      return true
    }

    return false;
  }
}