export type Photos = PhotoItem[];

export type PhotoItem = {
  image: string;
  text: string;
};

export type News = NewsItem[];

export type NewsItem = {
  date: string;
  text: string;
};

export type Branches = Branch[];

export type Branch = {
  name: string;
  prefecture: string;
  address: string;
  post_code: string;
};
