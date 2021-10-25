import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, setState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  //const d'état pour la data récupérée de l'api
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(null);
  const [display, setDisplay] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  //recherche de recettes par la première lettre.
  function getData() {
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${location}`)
      .then((res) => {
        return res.json();
      })
      .then((resObject) => {
        setData(resObject.meals);
        console.log("resObject", resObject);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getInput() {
    getData(location);
    setDisplay(true);
    setLocation("");
  }

  if (data) {
    console.log(data);
  }

  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <View>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "black",
              width: 300,
              margin: 25,
              padding: 2,
            }}
            value={location}
            onChangeText={(e) => setLocation(e)}
            placeholder="Ex: French, Japanese..."
          />
          <TouchableOpacity
            style={{ backgroundColor: "#0099ff", padding: 15 }}
            value={location}
            onPress={() => getInput()}
          >
            <Text style={{ color: "white" }}>Search a Recipe</Text>
          </TouchableOpacity>
          {modalVisible && (
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                      Voici une Modal, MEGA Easter Egg !!!
                    </Text>
                    <Text style={styles.title}></Text>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          )}

          {data
            ? data.map((item, index) => {
                return (
                  <View key={index}>
                    <View style={styles.card}>
                      <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.title} key={index}>
                          {item.strMeal}
                        </Text>
                      </TouchableOpacity>
                      <Image
                        style={styles.image}
                        key={index}
                        source={{ uri: `${item.strMealThumb}` }}
                      />
                    </View>
                  </View>
                );
              })
            : null}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dbdbdb",
  },

  card: {
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    padding: 5,
  },

  title: {
    margin: 5,
    fontSize: 20,
  },

  image: {
    height: 200,
    width: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
