import {
	StyleSheet,
    StatusBar
} from 'react-native';
import { Colors } from 'react-native-ui-lib';

const homeStyles = StyleSheet.create({
    catImg: {
        height: 300,
        resizeMode: "contain",
        marginHorizontal: "auto"
    },
    menu: {
        // top: 0,
        // flexDirection: "row",
        display: "flex",
        alignItems: "flex-end"
    },
    menuBtn: {
        // width: 150,
        // alignItems: "right",
        backgroundColor: Colors.primaryFade,
        padding: 16,
        borderRadius: 25
    },
    menuLabel: {
        fontWeight: 700
    },
    captionContent: {
        height: "50%"
    },
    actionBtn: {
        position: "absolute",
        right: -26,
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    emos: {
        position: "absolute",
        marginLeft: 16,
        marginTop: 50,
        padding: 10,
        borderRadius: 50,
        backgroundColor: Colors.primaryFade,
        zIndex: 10
    },
    emoImg: {
        width: 50,
        height: 50,
        resizeMode: "cover"
    },
    emoTitle: {
        position: "absolute",
        right: 16,
        top: 325,
        color: "white"
    }
});

export default homeStyles;