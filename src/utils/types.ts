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
  hitArray?: string[];
  missArray: string[];
  columns?: cellObject[][];
  rows?: cellObject[][];
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
  label?: string | null;
}
