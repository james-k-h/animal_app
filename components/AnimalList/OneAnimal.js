import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnimalDetails from "../AnimalDetails";

function OneAnimal({
  id,
  title,
  imageUrl,
  animal_class,
  animal_family,
  genus,
}) {
  const navigation = useNavigation();

  function selectOneAnimalHandler() {
    navigation.navigate("AnimalDetail", {
      animalId: id,
    });
  }

  return (
    <View style={Styles.oneAnimal}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? Styles.buttonPressed : null]}
        onPress={selectOneAnimalHandler}
      >
        <View>
          <View>
            <Image source={{ uri: imageUrl }} style={Styles.image} />
            <Text style={Styles.title}>{title}</Text>
          </View>
          <AnimalDetails
            animal_class={animal_class}
            genus={genus}
            animal_family={animal_family}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default OneAnimal;

const Styles = StyleSheet.create({
  oneAnimal: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#000033",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    color: 'white'
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
    color: 'white'
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
});
