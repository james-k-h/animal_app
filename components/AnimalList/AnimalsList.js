import { View, FlatList, StyleSheet } from 'react-native';

import OneAnimal from './OneAnimal';

function AnimalsList({items}) {
  function renderOneAnimal(itemData) {
    const item = itemData.item;

    const OneAnimalProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      genus: item.genus,
      animal_family: item.animal_family,
      animal_class: item.animal_class,
    };
    return <OneAnimal {...OneAnimalProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderOneAnimal}
      />
    </View>
  );
}

export default AnimalsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});