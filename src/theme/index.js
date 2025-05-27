import {
	StyleSheet
} from 'react-native';
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: "#fcac41",
		paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	container: {
		// padding: 16,
		paddingTop: 25,
		height: "100%"
	},
    card: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        padding: 30,
        marginTop: 30,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    catImg: {
        height: 300,
        resizeMode: "contain",
        marginHorizontal: "auto"
    },
    menu: {
        top: 0,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    menuBtn: {
        alignItems: "center",
        backgroundColor: "#ff8900",
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
    }
});

export default styles;