export interface NoticeModel {
  id: string;
  _id: string;
  title: string;
  author: Author;
  read_time: number;
  status: string;
  content: string;
  published_at: PublishedAt;
  category: Category;
  bannerImage: string;
  tag: Tag;
}

export interface Author {
  id: string;
  name: string;
  profile_image: string;
}

export interface PublishedAt {
  $date: string;
}

export interface Tag {
  _id: Id;
  name: string;
  slug: string;
}

export interface Category {
  _id: Id;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface Id {
  $oid: string;
}
