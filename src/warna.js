import { StyleSheet } from "react-native"

export const warnas = {
    darkBg: "#222",
    lightBg: "#333",
    darkHl: "#666",
    lightHl: "#666",
    pink: "#ea3372",
    text: "#fff",
    orange: "#F97878",
    textSec: "#aaa"
}

export const gs = StyleSheet.create({
    sectionContainer: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: warnas.lightBg
    },
    sectionTitle: {
        fontWeight: "700",
        // colors: warnas.text,
        fontSize: 15
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center"
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24
    },
    title: {
        color: warnas.text,
        fontSize: 30
    },
    subTitle: {
        fontWeight: "600",
        textTransform: "uppercase",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 15,
        letterSpacing: 1
    },
    smallText: {
        fontSize: 12,
        fontWeight: "800",
        color: warnas.text
    },
    absoluteFull: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: warnas.pink,
        borderRadius: 100
    }

})