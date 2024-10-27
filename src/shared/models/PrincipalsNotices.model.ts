interface Author {
  id: string;
  name: string;
}

interface Media {
  type: "image" | "video"; // Adapte se houver mais tipos
  url: string;
  alt: string;
}

interface NewsItem {
  id: string;
  title: string;
  author: Author;
  read_time: number;
  media: Media;
  published_at: string;
  tag: string;
  summary?: string;
}

export default interface PrincipalsNoticesModel {
  highlight: NewsItem;
  latest_news: NewsItem[];
  latest_posts: NewsItem[];
}