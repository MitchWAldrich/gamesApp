export type BoardProps = {
  puzzle: cellObject[];
};

export type ButtonProps = {
  onPress?: () => void;
  onLongPress?: () => void;
  title: string;
  color: string;
  disabled?: boolean;
  loading?: boolean;
};

export type CellProps = {
  cellObj: cellObject;
  currentCell?: number | string | null;
  finalNumber?: number | string | null;
  hitArray?: string[] | undefined;
  missArray?: string[] | undefined;
  columns?: cellObject[][][];
  rows?: cellObject[][][];
};

export type puzzleArray = {
    id: string;
    value: string;
    row: number;
    column: number | null;
    target: boolean | null;
    clickType: string;
  }[];

export type cellObject = {
  id: string;
  value: string;
  row: number;
  column: number | null;
  target: boolean | null;
  clickType: string;
  isLabel?: boolean | null;
  label?: string[] | number[] | null | undefined;
}
