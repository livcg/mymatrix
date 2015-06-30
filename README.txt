Logic Puzzle Matrix Helper

App that creates a blank matrix that you can use to solve a logic puzzle.

User story:
I start by entering labels for rows & columns and get an empty labelled matrix back.  I start filling in cells of the matrix with 'X,' 'O,' 'X?,' 'O?,' etc.  When I fill in an 'O,' the relevant adjacent cells are X'd out.  My "moves" are listed on the sidebar, and I can revert to a previous move.  I can indicate that I'm starting a "branch" which I may or may not complete to the end of the puzzle.  When I'm done with a puzzle, I indicate the status of the puzzle and record whether or not my solution matches the puzzle answer.

Defer:
Allow row groups, column groups, rows, and columns to be reordered
Revert
Branches

Data:
Matrix
  Label
  RowGroup[]
  ColumnGroup[]
  create(rowGroupLabel, rowLabels[], columnGroupLabel, columnLabels)
  addMove(rowGroup, row, columnGroup, column, symbol)
    rowGroup.addMove(row, symbol)
    columnGroup..addMove(column, symbol)
    recordMove(rowGroup, row, columnGroup, column, symbol)
    revertToMove(moveNumber)
RowGroup
  Label
  Row[]
Moves
  Cell - RowGroup, Row, ColumnGroup, Column
  Symbol - 'X', 'O', 'X?', 'O?'
  ModifiedCells - Cell, PreviousSymbol

To do:
x. Display long labels vertically
x. Change editable labels to text fields
When text fields are modified, update related fields
Toggle cells between X, O, X?, O?, empty
Change background to distinguish cell groups
Save matrix
Improve styling

Tests:
Empty matrix
1x1 matrix
Support 'X' symbol
2x2 matrix
Support 'O' symbol
Matrix of 1 RowGroup x 1 ColumnGroup
Matrix of 2 RowGroups x 2 ColumnGroups
