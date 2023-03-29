import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results) {
    return null;
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Results", { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 5,
  },
  viewStyle: {
    marginBottom: 10,
  },
});

export default ResultsList;
