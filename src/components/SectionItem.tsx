import React from 'react';
import { View, Text } from 'react-native';

import { Section, Chapter } from './Type';
import styles from '../../assets/styles';

interface SectionItemProps {
  section: Section;
  chapter: Chapter;
}

const SectionItem: React.FC<SectionItemProps> = ({ section, chapter }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.header}>
        {chapter.number}.{section.number}: {section.title}
      </Text>
    </View>
  );
};

export default SectionItem;
