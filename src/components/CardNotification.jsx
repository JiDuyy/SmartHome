import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, SIZES } from "../styles/theme";
import moment from "moment";
import * as Localization from "expo-localization";

export default function CardNotification({ notification }) {

  const handleNotificationDetail = () => {
    Alert.alert(notification.title, notification.subTitle, [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleNotificationDetail}>
          <Ionicons
            name={notification.iconName}
            size={40}
            color={COLORS.icon}
          />
        </TouchableOpacity>
        <View style={styles.boxTitle}>
          <Text
            onPress={() => handleNotificationDetail()}
            style={styles.title}
          >
            {notification.title}
          </Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {notification.subTitle.toString().length < 40
              ? `${notification.subTitle}`
              : `${notification.subTitle.substring(0, 37)}...`}
          </Text>
          {/* {dayTime && (
          )} */}
          <Text style={[styles.subTitle, { textAlign: "right" }]}>
            {notification.timeCreate}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#18191a",
    borderRadius: 8,
    marginBottom: SIZES.background,
    padding: SIZES.background,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.background,
  },
  boxTitle: {
    flex: 1,
  },
  title: {
    color: COLORS.title,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    color: COLORS.subTitle,
    fontSize: 16,
  },
});
