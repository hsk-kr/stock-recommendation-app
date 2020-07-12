import React, { useState, useCallback } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import PropTypes from "prop-types";

const SearchBox = ({ containerStyle, dateValue, onChange }) => {
  const [modalShow, setModalShow] = useState(false);

  const openModalHandler = useCallback(() => {
    setModalShow(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setModalShow(false);
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.dateViewerContents}
        onPress={openModalHandler}
      >
        <Text style={styles.label}>
          분석 날짜:{" "}
          {`${dateValue.getFullYear()}년 ${dateValue.getMonth()}월 ${dateValue.getDate()}일`}
        </Text>
        <Text style={styles.sublabel}>
          * 터치하여 종목 추천 날짜를 바꿀 수 있습니다.
        </Text>
      </TouchableOpacity>
      {modalShow && (
        <Modal animationType="slide" transparent={false} visible={modalShow}>
          <View style={styles.datePickerContents}>
            <Text style={styles.pickerLabel}>
              * 분석 날짜 기준 다음 종목을 추천합니다.
            </Text>
            <Text style={styles.pickerSubLabel}>
              EX) 분석날짜를 2020-07-12로 하면
            </Text>
            <Text style={styles.pickerSubLabel}>
              2020-07-13에 투자할 종목을 추천합니다.
            </Text>
            <DateTimePicker
              style={styles.datePicker}
              mode="date"
              value={dateValue}
              onChange={onChange}
            />
            <TouchableOpacity
              style={styles.btnDatePicker}
              onPress={closeModalHandler}
            >
              <Text style={styles.labelDatePicker}>날짜 선택</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

SearchBox.propTypes = {
  containerStyle: PropTypes.object,
  dateValue: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74b9ff",
    padding: 20,
    borderRadius: 10,
  },
  dateViewerContents: {
    alignItems: "center",
    justifyContent: "center",
  },
  datePickerContents: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  pickerLabel: {
    fontSize: 16,
    color: "#2f3542",
    marginBottom: 7,
  },
  pickerSubLabel: {
    fontSize: 11,
    color: "#2f3542",
  },
  label: {
    fontSize: 20,
    marginRight: 5,
    color: "#fff",
  },
  sublabel: {
    fontSize: 12,
    marginTop: 8,
    color: "#dfe6e9",
  },
  btnDatePicker: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#0984e3",
    alignItems: "center",
    justifyContent: "center",
  },
  labelDatePicker: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  datePicker: {
    width: "100%",
  },
});

export default SearchBox;
