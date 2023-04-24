import { View, Text, StyleSheet } from 'react-native';


import AnimalsList from '../components/AnimalList/AnimalsList';

import { ANIMALS } from '../data/animal-data';
import { useSelector } from 'react-redux';

function FavoritesScreen() {

  const favoriteAnimalIds = useSelector(state => state.favoriteAnimals.ids)

  const favoriteAnimals = ANIMALS.filter((animal) =>
    favoriteAnimalIds.includes(animal.id)
  );

  if (favoriteAnimals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You haven't favorited an animal yet.</Text>
      </View>
    );
  }

  return <AnimalsList items={favoriteAnimals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
