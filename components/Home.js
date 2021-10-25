import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, setState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  //const d'état pour la data récupérée de l'api
  const [data, setData] = useState({});
  const [newState, setNewState] = useState(false);

  const getRecipe = () => {
    fetch(`https://themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        return res.json();
      })
      .then((resObject) => {
        setData(resObject);
        console.log("resObject", resObject);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView vertical={true}>
        <View style={styles.container}>
          <Image
            style={{ height: 100, width: 150 }}
            source={require("../assets/Logo-recipe3.png")}
          />
          <Text style={{ margin: 15, fontSize: 20 }}>
            Welcome, here is a random recipe:
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: "#0099ff", padding: 15 }}
            type="outline"
            onPress={getRecipe}
          >
            <Text style={{ color: "white" }}>Get a new recipe!</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#dbdbdb",
              borderWidth: 1,
              borderColor: "black",
              margin: 10,
              padding: 2,
            }}
          >
            <Text style={{ margin: 15, fontSize: 17, color: "black" }}>
              Recipe: {data?.meals?.[0]?.strMeal}, this meal is{" "}
              {data?.meals?.[0]?.strArea}.
            </Text>
            <Image
              style={{
                height: 300,
                width: 300,
                margin: 20,
                borderWidth: 1,
                borderColor: "black",
              }}
              source={{ uri: `${data?.meals?.[0]?.strMealThumb}` }}
            />
            <Text style={{ margin: 15, fontSize: 20 }}>Instructions: </Text>
            <Text>{data?.meals?.[0]?.strInstructions}</Text>
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
    justifyContent: "center",
  },
});
