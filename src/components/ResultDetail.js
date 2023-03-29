import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars,
        {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 20,
  },
  imageStyle: {
    width: 200,
    height: 130,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultDetail;
