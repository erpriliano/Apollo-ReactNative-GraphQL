import { Chapter } from './Type';

export type RootStackParamList = {
  Home: undefined;
  Chapter: { chapter: Chapter };
};
