import { StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';
import styles from './../../theme';

export default function Home() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <LinearGradient
                colors={[
                    "#ff8900",
                    "white"
                ]}
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 0.9,
                    y: 0.5
                }}
                style={StyleSheet.absoluteFill}
            />
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
                    >Chia sẻ cảm xúc</Text>
                </View>
                <Image style={styles.catImg} source={require("./../../assets/images/cat2.png")}/>
                <View style={styles.card}>
                    <View style={styles.captionContent}>
                        <Image style={[styles.actionBtn, {top: -16}]} source={require("./../../assets/images/icons/Share.png")}/>
                        <Image style={[styles.actionBtn, {top: 60}]} source={require("./../../assets/images/icons/Lock.png")}/>
                    </View>
                    <View style={styles.menu}>
                        <Pressable style={styles.menuBtn}>
                            <Text orange80 style={styles.menuLabel}>Tất cả</Text>
                        </Pressable>
                        <Pressable style={styles.menuBtn}>
                            <Text orange80 style={styles.menuLabel}>Hạnh phúc</Text>
                        </Pressable>
                        <Pressable style={styles.menuBtn}>
                            <Text orange80 style={styles.menuLabel}>Tâm trạng</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}