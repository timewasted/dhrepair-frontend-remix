export interface Image {
  id: number;
  image: string;
  hash: string;
  title: string | null;
  fullWidth: number;
  fullHeight: number;
  thumbWidth: number | null;
  thumbHeight: number | null;
}
