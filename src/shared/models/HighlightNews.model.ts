export default interface HighlightNewsModel {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
  };
  read_time: number;
  media: {
    type: string;
    url: string;
    alt: string;
  };
  published_at: string;
  tag: string;
  summary: string;
}
