import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

// Components
import TopBanner from "../../components/TopBanner";
import SearchBox from "../../components/SearchBox";
import StockList from "../../components/StockList";

const MainScreen = () => {
  const [date, setDate] = useState(new Date());

  const onChange = useCallback(
    (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    },
    [date]
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBanner containerStyle={styles.topBanner} />
      <View style={styles.contents}>
        <SearchBox
          containerStyle={styles.searchBox}
          onChange={onChange}
          dateValue={date}
        />
        <StockList containerStyle={styles.stockListContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  topBanner: {
    flex: 1,
  },
  contents: {
    flex: 3,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBox: {
    flex: 1,
    marginBottom: 15,
  },
  stockListContainer: {
    flex: 8,
  },
  stockListSubtitle: {
    flex: 1,
    backgroundColor: "#00ff00",
  },
  stockList: {
    flex: 3,
    backgroundColor: "#ececec",
  },
});

export default MainScreen;
