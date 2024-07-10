declare interface PostI {
  id: string;
  author: UserI;
  comments_count: number;
  content: string;
  created_at: string;
  images: string[];
  like_count: number;
  reposts: number;
  type?: string;
}
