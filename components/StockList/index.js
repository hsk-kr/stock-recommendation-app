import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

const StockList = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>추천 종목</Text>
        <Text style={styles.label}>
          * CD: 전날 대비 하락세에 기관|외국인 매수 들어온 연속 날짜
        </Text>
        <Text style={styles.label}>
          * W: 연속 기간 내 외국인|기관 총 매수 금액
        </Text>
      </View>
      <View style={styles.stocksContainer}>
        <Text>Stock List</Text>
      </View>
    </View>
  );
};

StockList.propTypes = {
  containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74b9ff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  stocksContainer: {
    flex: 4,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#ffffff",
  },
  titleLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  label: {
    fontSize: 9,
  },
});

export default StockList;
