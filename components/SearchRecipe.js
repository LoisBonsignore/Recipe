import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, setState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchRecipe() {
  //const d'état pour la data récupérée de l'api, pour l'input (recipe) et diplay pour l'affichage booléen(display)
  const [data, setData] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [display, setDisplay] = useState(false);

  function getData() {
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
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
  }

  function getInput(recipe) {
    getData(recipe);
    setDisplay(true);
  }

  return (
    <View>
      <ScrollView vertical={true}>
        <View style={styles.container}>
          <Image
            style={{ height: 100, width: 150 }}
            source={require("../assets/Logo-recipe3.png")}
          />
          <View>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "black",
                width: 300,
                margin: 25,
                padding: 2,
              }}
              value={recipe}
              onChangeText={(e) => setRecipe(e)}
              placeholder="Search a recipe"
            />
          </View>
          <TouchableOpacity
            style={{ backgroundColor: "#0099ff", padding: 15 }}
            value={recipe}
            onPress={() => getInput()}
          >
            <Text style={{ color: "white" }}>Search a Recipe</Text>
          </TouchableOpacity>
          {/* affichage en booléen */}
          {display && (
            <View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  padding: 1,
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
                <Text style={{ marginLeft: 10, fontSize: 20 }}>
                  Ingredients:{" "}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure1}{" "}
                  {data?.meals?.[0]?.strIngredient1}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure2}{" "}
                  {data?.meals?.[0]?.strIngredient2}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure3}{" "}
                  {data?.meals?.[0]?.strIngredient3}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure4}{" "}
                  {data?.meals?.[0]?.strIngredient4}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure5}{" "}
                  {data?.meals?.[0]?.strIngredient5}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure6}{" "}
                  {data?.meals?.[0]?.strIngredient6}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure7}{" "}
                  {data?.meals?.[0]?.strIngredient7}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure8}{" "}
                  {data?.meals?.[0]?.strIngredient8}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strMeasure9}{" "}
                  {data?.meals?.[0]?.strIngredient9}
                </Text>
                <Text style={{ marginLeft: 10, marginRight: 20, fontSize: 20 }}>
                  Instructions:{" "}
                </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                  {data?.meals?.[0]?.strInstructions}
                </Text>
              </View>

              <View style={{ height: 60 }}></View>
              {data?.meals?.[1]?.strMeal ? (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    margin: 10,
                    padding: 1,
                  }}
                >
                  <Text style={{ margin: 15, fontSize: 17, color: "black" }}>
                    Recipe: {data?.meals?.[1]?.strMeal}, this meal is{" "}
                    {data?.meals?.[1]?.strArea}.
                  </Text>
                  <Image
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      height: 300,
                      width: 300,
                      margin: 20,
                    }}
                    source={{ uri: `${data?.meals?.[1]?.strMealThumb}` }}
                  />
                  <Text style={{ marginLeft: 10, fontSize: 20 }}>
                    Ingredients:{" "}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure1}{" "}
                    {data?.meals?.[1]?.strIngredient1}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure2}{" "}
                    {data?.meals?.[1]?.strIngredient2}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure3}{" "}
                    {data?.meals?.[1]?.strIngredient3}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure4}{" "}
                    {data?.meals?.[1]?.strIngredient4}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure5}{" "}
                    {data?.meals?.[1]?.strIngredient5}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure6}{" "}
                    {data?.meals?.[1]?.strIngredient6}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure7}{" "}
                    {data?.meals?.[1]?.strIngredient7}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure8}{" "}
                    {data?.meals?.[1]?.strIngredient8}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strMeasure9}{" "}
                    {data?.meals?.[1]?.strIngredient9}
                  </Text>
                  <Text
                    style={{ marginLeft: 10, marginRight: 20, fontSize: 20 }}
                  >
                    Instructions:{" "}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[1]?.strInstructions}
                  </Text>
                </View>
              ) : (
                <View></View>
              )}

              <View style={{ height: 60 }}></View>
              {data?.meals?.[2]?.strMeal ? (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    margin: 10,
                    padding: 1,
                  }}
                >
                  <Text style={{ margin: 15, fontSize: 17, color: "black" }}>
                    Recipe: {data?.meals?.[2]?.strMeal}, this meal is{" "}
                    {data?.meals?.[2]?.strArea}.
                  </Text>
                  <Image
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      height: 300,
                      width: 300,
                      margin: 20,
                    }}
                    source={{ uri: `${data?.meals?.[2]?.strMealThumb}` }}
                  />
                  <Text style={{ marginLeft: 10, fontSize: 20 }}>
                    Ingredients:{" "}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure1}{" "}
                    {data?.meals?.[2]?.strIngredient1}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure2}{" "}
                    {data?.meals?.[2]?.strIngredient2}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure3}{" "}
                    {data?.meals?.[2]?.strIngredient3}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure4}{" "}
                    {data?.meals?.[2]?.strIngredient4}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure5}{" "}
                    {data?.meals?.[2]?.strIngredient5}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure6}{" "}
                    {data?.meals?.[2]?.strIngredient6}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure7}{" "}
                    {data?.meals?.[2]?.strIngredient7}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure8}{" "}
                    {data?.meals?.[2]?.strIngredient8}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strMeasure9}{" "}
                    {data?.meals?.[2]?.strIngredient9}
                  </Text>
                  <Text
                    style={{ marginLeft: 10, marginRight: 20, fontSize: 20 }}
                  >
                    Instructions:{" "}
                  </Text>
                  <Text style={{ marginLeft: 20, marginRight: 20 }}>
                    {data?.meals?.[2]?.strInstructions}
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dbdbdb",
  },
});
