import React from 'react';
import { Pressable, Text } from 'react-native';

import { Chapter } from './Type';
import styles from '../../assets/styles';

interface ChapterItemsProps {
  chapter: Chapter;
  onPress?: () => void;
}

const ChapterItems: React.FC<ChapterItemsProps> = ({ chapter, onPress }) => {
  const { number, title } = chapter;
  let header, subheader;

  if (number) {
    header = `Chapter ${number}`;
    subheader = title;
  } else {
    header = title;
  }

  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Text>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </Pressable>
  );
};

export default ChapterItems;
