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
        height: 200,
        resizeMode: "contain",
        marginHorizontal: "auto"
    }
});

export default styles;