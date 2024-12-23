interface Author {
  id: string;
  name: string;
  imageSrc: string;
}

interface Media {
  type: "image" | "video" | "audio" | "document";
  url: string;
  alt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  initialText: string;
  author: Author;
  read_time: number;
  media: Media;
  published_at: Date;
  tag: {
    text: string;
    color: string;
  };
  categorie: string;
  summary?: string;
}

export interface StorieItem {
  name: string;
  imageSrc: string
}

export default interface PrincipalsNoticesModel {
  highlight: NewsItem;
  latest_news: NewsItem[];
  latest_posts: NewsItem[];
  recent_updates: NewsItem[];
  stories: StorieItem[];
}
