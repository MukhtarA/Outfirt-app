import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Button from "../../components/Button";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
    },
    subtitle: {
        fontFamily: "Helvetica Neue",
        fontSize: 24,
        fontWeight: "500",
        lineHeight: 30,
        marginBottom: 12,
        color: '#0C0D34',
    },
    description: {
        fontFamily: "Helvetica Neue",
        fontSize: 16,
        lineHeight: 24,
        color: '#0C0D34',
        textAlign: "center",
        marginBottom: 40,
    },
});

interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
                label={last ? "Let's get started" : "Next"}
                variant={last ? "primary" : "default"}
                {...{onPress}}
            />
        </View>
    );
}

export default Subslide;
