import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

/**
 * "adid": 4700,
  "continuous_days": 2,
  "created_at": "2020-07-19 11:23:31",
  "detail_page_url": "https://finance.naver.com/item/main.nhn?code=214870",
  "name": "뉴지랩",
  "stock_type": "kosdaq",
  "weight_value": 2990,
 * @param {*} param0 
 */
const ListItem = ({ data }) => {
  const {
    name,
    continuous_days: continuousDays,
    detail_page_url: detailPageUrl,
    stock_type: stockType,
    weight_value: weightValue,
  } = data;

  const stockPressHandler = useCallback(async () => {
    const supported = await Linking.canOpenURL(detailPageUrl);

    if (supported) {
      await Linking.openURL(detailPageUrl);
    }
  }, [detailPageUrl]);

  return (
    <TouchableOpacity onPress={stockPressHandler}>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <View style={styles.stockType}>
            <Text style={styles.stockTypeText}>{stockType.toUpperCase()}</Text>
          </View>
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>CD:</Text>
          <Text style={styles.continuousDaysText}>{continuousDays}</Text>
          <Text style={styles.label}>W:</Text>
          <Text style={styles.weightText}>{weightValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 30,
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  stockType: {
    borderRadius: 8,
    backgroundColor: "#ff5e57",
    padding: 4,
    marginRight: 4,
  },
  stockTypeText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 12,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginRight: 4,
  },
  continuousDaysText: {
    fontSize: 12,
    color: "#3c40c6",
    marginRight: 15,
  },
  weightText: {
    fontSize: 12,
    color: "#05c46b",
  },
});

export default ListItem;
