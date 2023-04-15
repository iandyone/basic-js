const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The checkedMatrix should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let checkedMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        checkedMatrix.push([]);

        for (let j = 0; j < matrix[i].length; j++) {
            const isTopLeftBoxHasMine = j - 1 >= 0 && i - 1 >= 0 && matrix[i - 1][j - 1];
            const isTopMiddleBoxHasMine = i - 1 >= 0 && matrix[i - 1][j];
            const isTopRightBoxHasMine = j + 1 < matrix[i].length && i - 1 >= 0 && matrix[i - 1][j + 1];
            const isRightMiddleBoxHasMine = j + 1 < matrix[i].length && matrix[i][j + 1];
            const isBottomRightBoxHasMine = j + 1 < matrix[i].length && i + 1 < matrix.length && matrix[i + 1][j + 1];
            const isBottomMiddleBoxHasMine = i + 1 < matrix.length && matrix[i + 1][j];
            const isBottomLeftBoxHasMine = j - 1 >= 0 && i + 1 < matrix.length && matrix[i + 1][j - 1];
            const isLeftMiddleBoxHasMine = j - 1 >= 0 && matrix[i][j - 1];
            let mineCounter = 0;

            const currentBoxSiblingsChecks = [isTopLeftBoxHasMine, isTopMiddleBoxHasMine, isTopRightBoxHasMine, isRightMiddleBoxHasMine, isBottomRightBoxHasMine, isBottomMiddleBoxHasMine, isBottomLeftBoxHasMine, isLeftMiddleBoxHasMine];

            currentBoxSiblingsChecks.forEach((isMineInBox) => mineCounter = (isMineInBox) ? ++mineCounter : mineCounter);

            checkedMatrix[i].push(mineCounter);
        }
    }
    return checkedMatrix;
}
module.exports = {
    minesweeper,
};
