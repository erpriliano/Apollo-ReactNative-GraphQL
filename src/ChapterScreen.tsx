import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { gql, useQuery } from '@apollo/client';

import { RootStackParamList } from './components/NavigatorType';
import styles from '../assets/styles';
import Loading from './Loading';
import SectionItem from './components/SectionItem';

type ChapterRouteProp = RouteProp<RootStackParamList, 'Chapter'>;
type ChapterNavigationProp = StackNavigationProp<RootStackParamList, 'Chapter'>;

type ChapterScreenProps = {
  route: ChapterRouteProp;
  navigation: ChapterNavigationProp;
};

const SECTIONS_QUERY = gql`
  query Sections($id: Int!) {
    chapter(id: $id) {
      sections {
        number
        title
      }
    }
  }
`;

const ChapterScreen: React.FC<ChapterScreenProps> = ({ route }) => {
  const { data, loading } = useQuery(SECTIONS_QUERY, {
    variables: { id: route.params.chapter.id },
  });

  if (loading) {
    return <Loading />;
  }

  const {
    chapter: { sections },
  } = data;

  if (sections.length === 1) {
    return (
      <View style={styles.centered}>
        <Text>No Sections</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => {
        return <SectionItem section={item} chapter={route.params.chapter} />;
      }}
      keyExtractor={section => section.number.toString()}
      initialNumToRender={15}
    />
  );
};

export default ChapterScreen;
