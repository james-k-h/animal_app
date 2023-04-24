import { useLayoutEffect } from "react";
import { ANIMALS, CATEGORIES } from "../data/animal-data";
import { View, FlatList, StyleSheet } from "react-native";
import OneAnimal from './../components/AnimalList/OneAnimal';
import { Text } from "react-native";

function AnimalsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedAnimals = ANIMALS.filter((animal) => {
    return animal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderAnimal(itemData) {
    const item = itemData.item;

    const oneAnimalProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      genus: item.genus,
      animal_family: item.animal_family,
      animal_class: item.animal_class,
      id: item.id,
    };

    return <OneAnimal {...oneAnimalProps} />;
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={displayedAnimals}
        keyExtractor={(item) => item.id}
        renderItem={renderAnimal}
      />
    </View>
  );
}
export default AnimalsOverviewScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    textAlign: 'center',
    backgroundColor: 'black', 

  },
});
