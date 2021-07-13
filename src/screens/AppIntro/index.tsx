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

const AppIntro = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const ref = React.useRef();

  const [state, setState] = React.useState({
    activeItem: 0,
  });

  const data = [
    {
      heading: "First to know",
      subHeading: "All news in one place, be the first to know the latest news",
      image:
        "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
    },
    {
      heading: "First to know 2",
      subHeading: "All news in one place, be the first to know the latest news",
      image:
        "https://images.unsplash.com/photo-1610085831472-005801e1ce27?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      heading: "First to know 3",
      subHeading: "All news in one place, be the first to know the latest news",
      image:
        "https://images.unsplash.com/photo-1610062070518-55e6a3d3a290?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
  ];

  const onPressNext = () => {
    // @ts-ignore
    if (state.activeItem < 2) return ref?.current?.snapToNext();
    if (state.activeItem === 2) {
      navigation.push("Intro");
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.content}>
        {/* upper content */}
        <View style={styles.upperContent}>
          <Carousel
            data={data}
            sliderWidth={getWidth(380)}
            itemWidth={getWidth(288)}
            ref={ref}
            onSnapToItem={(index) => setState({ ...state, activeItem: index })}
            renderItem={({ item, index }) => (
              <Image
                key={index}
                source={{ uri: item.image }}
                style={{
                  width: getWidth(288),
                  height: getHeight(336),
                  borderRadius: 12,
                }}
              />
            )}
          />

          <Pagination
            dotsLength={data.length}
            activeDotIndex={state.activeItem}
            dotStyle={styles.activedotStyle}
            inactiveDotStyle={styles.dotStyle}
            containerStyle={styles.dots}
          />
        </View>
        {/* lower content */}
        <View style={[styles.bottomContent, globalStyles.container]}>
          <View>
            <Text style={styles.heading}>
              {data[state.activeItem]["heading"]}
            </Text>
            <Text style={styles.subHeading}>
              {data[state.activeItem]["subHeading"]}
            </Text>
          </View>
          <PrimaryButton onPress={onPressNext} text="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppIntro;
