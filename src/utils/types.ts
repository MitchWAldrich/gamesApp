export type BoardProps = {
  puzzle: {
    id: string;
    value: string;
    row: string;
    column: number | null;
    target: boolean | null;
    clickType: string;
  }[];
};

export type ButtonProps = {
  onPress?: () => void;
  onLongPress?: () => void;
  title: string;
  color: string;
  disabled?: boolean;
  loading?: boolean;
};

export type puzzleArray = {
    id: string;
    value: string;
    row: string;
    column: number | null;
    target: boolean | null;
    clickType: string;
  }[];

export type cell = {
  id: string;
  value: string;
  row: string;
  column: number | null;
  target: boolean | null;
  clickType: string;
}
