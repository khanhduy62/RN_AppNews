import * as React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { PrimaryButton } from "../../components/Buttons";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";
import { getWidth, getHeight } from "../../styles/index";

const GetStarted = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.content}>
        {/* upper content */}
        <View style={styles.upperContent}>
          <Image
            style={{ width: "100%" }}
            source={require("../../assets/images/3d-illustration.png")}
          />
        </View>
        {/* lower content */}
        <View style={[styles.bottomContent, globalStyles.container]}>
          <View>
            <Text style={[styles.headingBigger]}>Nuntium</Text>
            <Text style={styles.subHeading}>
              All news in one place, be the first to know the latest news
            </Text>
          </View>
          <PrimaryButton
            onPress={() => navigation.push("Signin")}
            text="Get Started"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
