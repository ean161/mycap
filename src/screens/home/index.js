import { StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';
import styles from './../../theme';

export default function Home() {
    return (
        <SafeAreaView style={styles.wrapper}>
            {/* <LinearGradient
                colors={[
                    "purple",
                    "white"
                ]}
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 0.6,
                    y: 0.3
                }}
                style={StyleSheet.absoluteFill}
            /> */}
            <View style={styles.container}>
                <View
                    marginL-16
                    style={{
                        position: "absolute"
                    }}
                >
                    <Text
                        white
                        text40H
                        
                    >MyCap</Text>
                    <Text
                        white
                    >Chia sẻ thay bạn</Text>
                </View>
                <Image style={styles.catImg} source={require("./../../assets/images/cat.png")}/>
                <View style={styles.card}>
                    <Text>Hi</Text>
                    <ScrollView>
                        <Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text><Text>Hi</Text>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}