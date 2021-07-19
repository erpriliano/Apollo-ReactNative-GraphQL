export interface Data {
  chapters: Chapter[];
}

export interface Chapter {
  __typename: Typename;
  id: number;
  number: number | null;
  title: string;
}

export interface Section {
  __typename: string;
  number: number;
  title: string;
}

export enum Typename {
  Chapter = 'Chapter',
}
