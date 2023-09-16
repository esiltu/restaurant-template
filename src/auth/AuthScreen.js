import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Swiper from "react-native-swiper";

const AuthScreen = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => setActivePageIndex(0)}
          style={[
            styles.tabItem,
            activePageIndex === 0 && styles.activeTabItem,
          ]}
        >
          <Text style={styles.tabText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActivePageIndex(1)}
          style={[
            styles.tabItem,
            activePageIndex === 1 && styles.activeTabItem,
          ]}
        >
          <Text style={styles.tabText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        loop={false}
        showsPagination={false}
        index={activePageIndex}
        onIndexChanged={(index) => setActivePageIndex(index)}
      >
        {/* Page 1: Create Account */}
        <SafeAreaView style={styles.pageContainer}>
          <View style={styles.pageContent}>
            <Text style={styles.pageText}>
              Add your create account form here
            </Text>
          </View>
        </SafeAreaView>

        {/* Page 2: Login */}
        <SafeAreaView style={styles.pageContainer}>
          <View style={styles.pageContent}>
            <Text style={styles.pageText}>Add your login form here</Text>
          </View>
        </SafeAreaView>
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    height: 50,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabItem: {
    backgroundColor: "blue",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AuthScreen;
