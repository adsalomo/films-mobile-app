import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";
import MovieService from "../services/MovieService";

function Movie() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await MovieService.get();
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleRenderRow = (movie) => {
    const { name, description, image } = movie.item;

    return (
      <View style={styles.viewMovies}>
        <View style={styles.viewImage}>
          <Image
            resizeMode="cover"
            source={{ uri: image }}
            style={styles.imageMovie}
          />
        </View>
        <View>
          <Text style={styles.movieName}>{name}</Text>
          <Text style={styles.movieDescription}>
            {description.substr(0, 60)}...
          </Text>
        </View>
      </View>
    );
  };

  if (!movies) {
    return (
      <View style={styles.startLoadMovies}>
        <ActivityIndicator size="large" />
        <Text>Cargando movies</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={movies}
      renderItem={handleRenderRow}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080f28",
  },
  viewMovies: {
    flexDirection: "row",
    margin: 10,
  },
  viewImage: {
    marginRight: 15,
  },
  imageMovie: {
    width: 80,
    height: 80,
  },
  movieName: {
    color: "#007bff",
    fontWeight: "bold",
    width: 280,
  },
  movieDescription: {
    paddingTop: 2,
    color: "#ffffff",
    width: 250,
  },
  startLoadMovies: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default Movie;
