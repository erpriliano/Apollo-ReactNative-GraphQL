import { StyleSheet } from 'react-native';

export const PINK = '#ff5dc8';

export const screenOptions = {
  headerStyle: {
    backgroundColor: PINK,
  },
  headerTintColor: '#fff',
};

export default StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
});
