import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../slices/albumSlice';

const AlbumList = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.items);
  const albumStatus = useSelector((state) => state.albums.status);
  const error = useSelector((state) => state.albums.error);

  useEffect(() => {
    if (albumStatus === 'idle') {
      dispatch(fetchAlbums());
    }
  }, [albumStatus, dispatch]);

  if (albumStatus === 'loading') {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (albumStatus === 'failed') {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={albums}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.url}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default AlbumList;