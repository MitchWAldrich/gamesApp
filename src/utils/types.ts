export type BoardProps = {
  puzzle: puzzleArray;
};

export type ButtonProps = {
  onPress?: () => void;
  onLongPress?: () => void;
  title: string;
  color: string;
  disabled?: boolean;
  loading?: boolean;
};

export type Button3Props = {
  onPress?: (id: string, type: string | number | null | undefined) => void;
  onLongPress?: () => void;
  title?: string | number | null;
  disabled?: boolean;
  loading?: boolean;
  row?: number;
  special?: string;
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
    isLabel?: boolean | null;
    label?: (string | number)[] | null | undefined;
  }[];

export type cellObject = {
  id: string;
  value: string;
  row: number;
  column: number | null;
  target: boolean | null;
  clickType: string;
  isLabel?: boolean | null;
  label?: (string | number)[] | null | undefined;
}
