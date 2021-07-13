import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Switch,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "../../components/Icon";
import { colors } from "../../styles";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";

const Profile = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [showNotification, setshowNotification] = useState(true);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={globalStyles.scrollView}>
        <View style={[globalStyles.container]}>
          <Text style={globalStyles.pageTitle}>Profile</Text>
          <View style={styles.profile}>
            <Image
              source={{
                uri:
                  "https://images.generated.photos/PvL6mEKfrJocPsO2hr3J7H5mFTtWtOyNA-UOl0Sk60w/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MzY4MzdfMDAz/NzA1NF8wNTIzNzY3/LmpwZw.jpg",
              }}
              resizeMode="contain"
              style={styles.profilePhoto}
            />
            <View style={styles.profileDetail}>
              <Text style={styles.profileDetailName}>Juliet Takashi</Text>
              <Text style={styles.profileDetailEmail}>J.Takashi@mail.com</Text>
            </View>
          </View>
          {/* options */}
          <View style={styles.optionCard}>
            <Text style={styles.optionCardText}>Notifications</Text>
            <Switch
              trackColor={{ false: colors.grayLight, true: colors.primary }}
              onValueChange={() => setshowNotification(!showNotification)}
              value={showNotification}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Language")}
            style={styles.optionCard}
          >
            <Text style={styles.optionCardText}>Language</Text>
            <Icon name="arrowRight" color={colors.grayDarker} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChangePassword")}
            style={styles.optionCard}
          >
            <Text style={styles.optionCardText}>Change Password</Text>
            <Icon name="arrowRight" color={colors.grayDarker} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Privacy")}
            style={styles.optionCard}
          >
            <Text style={styles.optionCardText}>Privacy</Text>
            <Icon name="arrowRight" color={colors.grayDarker} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Terms")}
            style={styles.optionCard}
          >
            <Text style={styles.optionCardText}>Terms & Conditions</Text>
            <Icon name="arrowRight" color={colors.grayDarker} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            style={styles.optionCard}
          >
            <Text style={styles.optionCardText}>Sign Out</Text>
            <Icon name="signout" color={colors.grayDarker} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
