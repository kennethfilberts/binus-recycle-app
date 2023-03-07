import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Splash() {
  return (
    <View>
        <Image source={require('../public/logo.png')} style={styles.logo}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});
