import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ActivityIndicator,
} from "react-native";
import PropTypes from "prop-types";

// Resources
import backgroundImg from "../../assets/images/top-banner-bg.jpg";

const TopBanner = ({ containerStyle }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[styles.container, containerStyle]}>
      {loading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator style={styles.indicator} size="large" />
        </View>
      )}
      <ImageBackground
        source={backgroundImg}
        style={styles.backgroundImgContainer}
        imageStyle={styles.backgroundImg}
        onLoad={() => setLoading(false)}
      >
        {!loading && (
          <>
            <Text style={styles.titleLabel}>돈 벌자</Text>
            <Text style={styles.subtitleLabel}>주식 종목 추천 시스템</Text>
          </>
        )}
      </ImageBackground>
    </View>
  );
};

TopBanner.propTypes = {
  containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImg: {
    opacity: 0.7,
  },
  titleLabel: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
  },
  subtitleLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
  },
});

export default TopBanner;
