export const Cell = ({ children, index, updateBoard }) => {
  const handleClick = () => {
    console.log("índice: ", index);
    console.log(`fila: ${Math.floor(index / 7)}, columna: ${index % 7}`);
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className="cell">
      {children}
    </div>
  );
};
