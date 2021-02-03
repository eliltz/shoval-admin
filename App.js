import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="This is an example button"></Button>
      <Text>Hey Crappster2!</Text>
      <Button
        title="Click Me To Post"
        onPress={() => {
          const article = { title: "React Hooks POST Request Example" };
          try {
            let data = {
              method: "POST",
              credentials: "same-origin",
              mode: "same-origin",
              body: JSON.stringify({
                appoid: article,
              }),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // "X-CSRFToken": cookie.load("csrftoken"),
              },
            };

            fetch(
              "http://10.51.128.52:5000/api/emailTester/eliltz@gmail.com",
              data
            )
              .then((response) => console.log(response.json())) // promise
              .then((json) => console.log(json))
              .catch((err) => console.log(err));
          } catch (error) {
            console.log(error.message);
          }
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
