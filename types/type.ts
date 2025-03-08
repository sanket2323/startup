interface Author {
  _id: number;
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Post {
  _id: number;
  _createdAt: string;
  views: number;
  author: Author;
  description: string;
  image: string;
  category: string;
  title: string;
}
