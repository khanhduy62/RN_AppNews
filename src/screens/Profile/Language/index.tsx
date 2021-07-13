import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "../../../components/Icon";
import { colors } from "../../../styles";
import getGlobalStyles from "../../../styles/globalStyles";
import getStyles from "./styles";

const Language = ({navigation}: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const languages =  ['English', 'Turkish', 'German', 'Spanish']
  const [chosenLanguage, setChosenLanguage] = useState(languages[0])

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[styles.heading, globalStyles.container]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="back" color={colors.grayDarker} />
        </TouchableOpacity>
        <Text style={styles.headingTitle}>Language</Text>
        <View></View>
      </View>
      <View style={globalStyles.container}>
      {languages.map((language, index) => {
        return (
            <TouchableOpacity style={[styles.languageCard, {backgroundColor: language === chosenLanguage ? colors.primary : colors.grayLighter}]} onPress={() => setChosenLanguage(language)} key={index}>
              <Text style={[styles.languageCardText, {color: language === chosenLanguage ? 'white' : colors.grayDarker}]}>{language}</Text>
              {chosenLanguage === language && <Icon name="check" color='white'/>}
            </TouchableOpacity>
        )
      })}
      </View>
    </SafeAreaView>
  );
};

export default Language;
