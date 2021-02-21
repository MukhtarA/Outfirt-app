import React, {useRef} from "react";
import {View, StyleSheet, Dimensions, ScrollView} from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import {interpolateColor, onScrollEvent, useValue} from "react-native-redash";
import Animated, {multiply} from "react-native-reanimated";
import Subslide from "./Subslide";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flexDirection: 'row',
        borderTopLeftRadius: 75,
        backgroundColor: '#fff',
    },
});

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description: "Confused about your outfit? Don't worry! Find the best outfit here",
        color: "#BFEAF5"
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it First",
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
        color: "#BEECC4"},
    {
        title: "Excentric",
        subtitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9"},
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description: "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD"},
];

const Boarding = () => {
    const x = useValue(0);
    const onScroll = onScrollEvent({x});
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width ),
        outputRange: slides.map((slide) => slide.color )
    });
    const scroll = useRef<Animated.ScrollView>(null);
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.slider, {backgroundColor}]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={2}
                    {...{onScroll}}
                >
                    {slides.map(({title}, index) => (
                        <Slide {...{label: title}} key={index} right={index % 2 !== 0} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>

            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor}} />
                <Animated.View style={[
                    styles.footerContent,
                    {
                        width: width * slides.length,
                        flex: 1,
                        transform: [{ translateX: multiply(x, -1) }],
                    }]}>
                    {slides.map(({subtitle, description}, index) => (
                        <Subslide
                            {...{subtitle, description}}
                            key={index}
                            last={index === (slides.length - 1)}
                            onPress={() => {
                                if (scroll.current){
                                    scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                                }
                            }}
                        />
                    ))}
                </Animated.View>
            </View>
        </View>
    )
}

export default Boarding;
