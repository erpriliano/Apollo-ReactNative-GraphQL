import React from 'react';
import { FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Loading from '../src/Loading';
import ChapterItem from './components/ChapterItem';
import { RootStackParamList } from './components/NavigatorType';

type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  route: HomeRouteProp;
  navigation: HomeNavigationProp;
};

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { data, loading } = useQuery(CHAPTERS_QUERY);

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={data.chapters}
      renderItem={({ item }) => {
        return (
          <ChapterItem
            chapter={item}
            onPress={() => navigation.navigate('Chapter', { chapter: item })}
          />
        );
      }}
      keyExtractor={chapter => chapter.id.toString()}
    />
  );
};

export default HomeScreen;
