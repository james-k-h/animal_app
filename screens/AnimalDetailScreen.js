import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/IconButton";
import List from "../components/AnimalDetails/List";
import Subtitle from "../components/AnimalDetails/SubTitle";
import AnimalDetails from "../components/AnimalDetails";
import { ANIMALS } from "../data/animal-data";

import { addFavorite, removeFavorite } from "../store/redux/favourites";

function AnimalDetailScreen({ route, navigation }) {
  const favoriteAnimalIds = useSelector((state) => state.favoriteAnimals.ids);
  const dispatch = useDispatch();

  const animalId = route.params.animalId;
  const selectedAnimal = ANIMALS.find((animal) => animal.id === animalId);

  const animalIsfavorite = favoriteAnimalIds.includes(animalId);

  function changeFavoriteStatusHandler() {
    if (animalIsfavorite) {
      dispatch(removeFavorite({ id: animalId }));
    } else {
      dispatch(addFavorite({ id: animalId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={animalIsfavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedAnimal.imageUrl }} />
      <Text style={styles.title}>{selectedAnimal.title}</Text>
      <AnimalDetails
        genus={selectedAnimal.genus}
        animal_family={selectedAnimal.animal_family}
        animal_class={selectedAnimal.animal_class}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Description</Subtitle>
          <Text style={styles.detailText}>{selectedAnimal.description}</Text>
          <Subtitle>Distribution</Subtitle>
          <Text style={styles.detailText}>{selectedAnimal.distribution}</Text>
          <Subtitle>Diet</Subtitle>
          <Text style={styles.detailText}>{selectedAnimal.animal_diet}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default AnimalDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
    lineHeight: 25
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
