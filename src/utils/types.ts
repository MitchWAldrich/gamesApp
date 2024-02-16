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

export type cellObject = {
  id: string;
  value: string;
  row: string;
  column: number | null;
  target: boolean | null;
  clickType: string;
}
