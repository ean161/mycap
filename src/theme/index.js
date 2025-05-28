import {
	StyleSheet,
    StatusBar
} from 'react-native';
import { Colors } from 'react-native-ui-lib';

Colors.loadColors({
    "primary": "#2A1D6E",
    "primaryFade": "#392877"
});

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.primaryFade,
		paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	container: {
		padding: 16,
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
    }
});

export default styles;