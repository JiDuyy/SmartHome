import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardNotification from "../components/CardNotification";
import { COLORS, SIZES } from "../styles/theme";
import { useUser } from "../api/userContext";
import { Swipeable } from "react-native-gesture-handler";
export default function Notification({ navigation }) {
  const { getListNotification, notification, deleteNotification } = useUser();
    useState(false);

  // useEffect(() => {
  //   getListNotification();
  // }, []);

  const handleDeleteNotification = (notificationId) => {
    return () => {
      deleteNotification({ notificationId: notificationId });
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: SIZES.background }}>
        <View style={styles.editProfileTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color={COLORS.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Notifications</Text>
        </View>
        <ScrollView>
          {notification &&
            notification.map((item) => {
              return (
                <Swipeable
                  key={item._id}
                  renderRightActions={(_, dragX) => (
                    <Animated.View
                      style={[
                        styles.deleteButton,
                        {
                          opacity: dragX.interpolate({
                            inputRange: [0, 75],
                            outputRange: [0, 1],
                            extrapolate: "clamp",
                          }),
                        },
                      ]}
                    >
                      <Text style={{ color: "white" }}>Delete</Text>
                    </Animated.View>
                  )}
                  rightThreshold={Dimensions.get("screen").width * 0.9} // kích thước phần tử được xóa khi vuốt sang phải
                  onSwipeableRightWillOpen={handleDeleteNotification(item._id)}
                >
                  <CardNotification notification={item} />
                </Swipeable>
              );
            })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.background,
  },
  editProfileTop: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    fontSize: SIZES.title,
    fontWeight: "bold",
    color: COLORS.title,
    marginLeft: 10,
    marginBottom: 40,
  },
});
