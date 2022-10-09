const white = 'O',
    black = 'X';

const invertColumn = (columns: string[]) =>
    columns.map((item: string) => (item === white ? black : white)) as string[];

export const chessBoard = (rowCount = 0, columnCount = 0) => {
    const board: string[][] = [];
    const columns: string[] = [];
    for (let column = 0; column < columnCount; column++)
        columns.push(column % 2 === 0 ? white : black);
    for (let row = 0; row < rowCount; row++)
        board.push(row % 2 === 0 ? columns : invertColumn(columns));
    return board;
};
