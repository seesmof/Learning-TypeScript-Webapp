interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "post title",
  desc: "post desc lorem ipsum",
  extra: ["author", "author", "author", "author", "author", "author", "author"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc lorem ipsum",
  extra: [
    { id: 1, username: "John" },
    { id: 2, username: "Jane" },
  ],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc lorem ipsum",
  extra: [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
  ],
};
