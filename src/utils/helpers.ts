import { cellObject } from "./types";

export const removeStringItemFromArray = (array: string[], id: string) => {
  const index = array.indexOf(id);
  array.splice(index, 1);
  return array;
};

export const sortNumbers = (numStringArray: string[]) => {
  return numStringArray.sort((a, b) => Number(a) - Number(b));
};

export const formatColumn = (column: cellObject[]) => {
  const newArray: cellObject[][] = [];

  for (let i = 0; i < column.length; i++) {
    if (column[i].target === true) {
      const array: cellObject[] = [column[i]];

      while (
        column[i + 1] &&
        column[i + 1].id === (Number(column[i]?.id) + 11).toString() &&
        column[i + 1].target === true
      ) {
        array.push(column[i + 1]);
        i++;
      }
      newArray.push(array);
    }
  }

  return newArray;
};

export const formatRow = (row: cellObject[]) => {
  const newArray: cellObject[][] = [];

  for (let i = 0; i < row.length; i++) {
    if (row[i].target === true) {
      const array: cellObject[] = [row[i]];

      while (
        row[i + 1] &&
        row[i + 1].id === (Number(row[i]?.id) + 1).toString() &&
        row[i + 1].target === true
      ) {
        array.push(row[i + 1]);
        i++;
      }
      newArray.push(array);
    }
  }

  return newArray;
};

export const updatePuzzle = (
  puzzleObjs: cellObject[],
  cellId: string | number,
  cellValue: string | number | null,
  clickType: string,
) => {
  const cellIndex = puzzleObjs.findIndex(
    (puzzleObj: cellObject) => puzzleObj.id === cellId,
  );

  const originalCell = puzzleObjs.find(puzzleObj => puzzleObj.id === cellId);
  if (originalCell?.isLabel === true) return puzzleObjs;

  let updatedCellValue: (string | number)[] | null | undefined = originalCell?.label ? [...originalCell?.label] : [];

  if (clickType === 'draft') {
    if (updatedCellValue && cellValue) {
      const cellValueIndex = updatedCellValue.indexOf(cellValue);

      updatedCellValue.includes(cellValue) ? updatedCellValue.splice(cellValueIndex, 1) : updatedCellValue.push(cellValue);
    }
  }

  if (clickType === 'final') {
    if (updatedCellValue && cellValue) {
      if (updatedCellValue.length === 1 && updatedCellValue.includes(cellValue)) {
        updatedCellValue.pop();
      } else if (updatedCellValue.length === 1 && !updatedCellValue.includes(cellValue)) {
        updatedCellValue.pop();
        updatedCellValue.push(cellValue);
      } else if (updatedCellValue.length > 1) {
        updatedCellValue.splice(0, updatedCellValue.length, cellValue)
      } else {
        updatedCellValue.push(cellValue);
      }
    }
  }

  const updatedCell: cellObject = {
    id: originalCell?.id ?? puzzleObjs[Number(cellId) - 1].id,
    value: originalCell?.value ?? puzzleObjs[Number(cellId) - 1].value,
    row: originalCell?.row ?? puzzleObjs[Number(cellId) - 1].row,
    column: originalCell?.column ?? puzzleObjs[Number(cellId) - 1].column,
    target: originalCell?.target ?? puzzleObjs[Number(cellId) - 1].target,
    clickType:
      clickType ?? puzzleObjs[Number(cellId) - 1].clickType,
    isLabel: originalCell?.isLabel ?? puzzleObjs[Number(cellId) - 1].isLabel,
    label: updatedCellValue ?? puzzleObjs[Number(cellId) - 1].label,
  };

  const updatedPuzzle = puzzleObjs
    .slice(0, cellIndex)
    .concat(updatedCell)
    .concat(puzzleObjs.slice(cellIndex + 1));

  return updatedPuzzle;
};
