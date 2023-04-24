import { View, Text, StyleSheet } from "react-native";

function AnimalDetails({
  genus,
  animal_family,
  animal_class,
  style,
  textStyle,
}) {
  return (
    <>
      <View style={[Styles.details, style]}>
        <Text style={[Styles.detailItem, textStyle]}>Genus: {genus}</Text>
      </View>
      <View style={[Styles.details, style]}>
        <Text style={[Styles.detailItem, textStyle]}>Animal Family: {animal_family}</Text>
      </View>
      <View style={[Styles.details, style]}>
        <Text style={[Styles.detailItem, textStyle]}>Animal Class: {animal_class}</Text>
      </View>
    </>
  );
}
export default AnimalDetails;

const Styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",

    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 1,
    fontSize: 15,
    fontWeight: 'bold', 
    color:'grey'
  },
});
