interface bookType {
  title: string;
  id: string;
  // description: string;
  authors?: string[];
  shelf?: string;
  // publishedDate: string;
  imageLinks?: { smallThumbnail: string; thumbnail: string };
  // publisher:string;
}

export default bookType;
