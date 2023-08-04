import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, SIZES } from "../styles/theme";

export default function TermsConditions({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: SIZES.background }}>
        <View style={styles.editProfileTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color={COLORS.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Terms & Conditions</Text>
        </View>
        <ScrollView>
          <Text style={styles.titleBody}>Terms of Use</Text>
          <Text style={styles.subTitleBody}>
            By downloading and/or using the Smart Home application, you accept
            that you have read, understood, and agree to comply with these terms
            of use.
          </Text>
          <Text style={styles.subTitleBody}>
            The Smart Home application is for personal, non-commercial use only.
            You are not allowed to copy, modify, distribute, sell, or lease any
            part of our service or the software provided by us.
          </Text>
          <Text style={styles.subTitleBody}>
            To use the Smart Home application, you must create an account. You
            agree to provide accurate and complete information when signing up
            and update the information when changes occur. We reserve the right
            to cancel your account if we find inaccurate, incomplete, or not
            updated information.
          </Text>
          <Text style={styles.subTitleBody}>
            We respect and protect your privacy. Information about how we
            collect, use and protect your personal data is described in our
            Privacy Policy.
          </Text>
          <Text style={styles.titleBody}>Company Policy</Text>
          <Text style={styles.subTitleBody}>
            We are committed to complying with regulations on privacy and
            personal data protection. Detailed information about how we collect,
            store, use, and protect your personal data is described in our
            Privacy Policy.
          </Text>
          <Text style={styles.subTitleBody}>
            We provide the Smart Home application with the aim to help you
            easily control and manage your smart home. You are not allowed to
            use this application for illegal purposes or violating other
            regulations.
          </Text>
          <Text style={styles.subTitleBody}>
            We are committed to fairly and efficiently handling any disputes
            that may arise from the use of our application. In case of disputes,
            you should contact us directly to find a solution. Note: The above
            terms and policies are illustrative and may not be comprehensive or
            suitable for all situations. You should seek legal advice to ensure
            that your terms and policies comply with all legal regulations.
          </Text>
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
  editProfileCenter: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    // backgroundColor: "blue",
  },
  title: {
    fontSize: SIZES.title,
    fontWeight: "bold",
    color: COLORS.title,
    marginLeft: 10,
    marginBottom: 40,
  },
  titleBody: {
    fontSize: SIZES.background,
    fontWeight: "bold",
    color: COLORS.title,
    marginBottom: 10,
  },
  subTitleBody: {
    fontSize: 16,
    color: COLORS.subTitle,
    marginBottom: SIZES.background,
  },
});
