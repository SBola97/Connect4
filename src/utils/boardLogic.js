//Comprueba las posibles combinaciones para ganar
export function checkWin(board) {
  // Comprobar filas
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const cellValue = board[rowIndex * 7 + columnIndex];
      if (cellValue === null) continue; // Salta la iteración actual si la celda está vacía

      if (cellValue === board[rowIndex * 7 + columnIndex + 1] &&
          cellValue === board[rowIndex * 7 + columnIndex + 2] &&
          cellValue === board[rowIndex * 7 + columnIndex + 3]) {
        return cellValue;
      }
    }
  }

  // Comprobar columnas
  for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      const cellValue = board[rowIndex * 7 + columnIndex];
      if (cellValue === null) continue;

      if (cellValue === board[(rowIndex + 1) * 7 + columnIndex] &&
          cellValue === board[(rowIndex + 2) * 7 + columnIndex] &&
          cellValue === board[(rowIndex + 3) * 7 + columnIndex]) {
        return cellValue;
      }
    }
  }

  // Comprobar diagonales descendentes
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const cellValue = board[rowIndex * 7 + columnIndex];
      if (cellValue === null) continue;

      if (cellValue === board[(rowIndex + 1) * 7 + columnIndex + 1] &&
          cellValue === board[(rowIndex + 2) * 7 + columnIndex + 2] &&
          cellValue === board[(rowIndex + 3) * 7 + columnIndex + 3]) {
        return cellValue;
      }
    }
  }

  // Comprobar diagonales ascendentes
  for (let rowIndex = 3; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const cellValue = board[rowIndex * 7 + columnIndex];
      if (cellValue === null) continue;

      if (cellValue === board[(rowIndex - 1) * 7 + columnIndex + 1] &&
          cellValue === board[(rowIndex - 2) * 7 + columnIndex + 2] &&
          cellValue === board[(rowIndex - 3) * 7 + columnIndex + 3]) {
        return cellValue;
      }
    }
  }

  return null; // No se encontraron combinaciones ganadoras
}

//comprueba si existe empate (tablero lleno)
export const checkEndGame = (newBoard) => {
  return newBoard.every((cell) => cell !== null);
}

//encuentra la última fila libre en la columna actual 
export const findLastEmptyRow = (index, board) => {
  const columnIndex = index % 7;
  for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
    const cellIndex = rowIndex * 7 + columnIndex;
    if (board[cellIndex] === null) {
      return rowIndex;
    }
  }
  return -1; // No hay filas vacías
};