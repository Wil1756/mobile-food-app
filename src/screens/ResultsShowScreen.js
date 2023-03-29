import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.textStyle}>{result.name} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
  },
  imageStyle: {
    marginVertical: 8,
    marginLeft: 20,
    borderRadius: 5,
    height: 150,
    width: 200,
  },
});

export default ResultsShowScreen;
