import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { View, Text, Image, Colors } from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';
import styles from './../../theme';
import homeStyles from './../../theme/homeStyles';

export default function Home() {
    const [emo, setEmo] = useState("all");

    useEffect(() => {
        console.log(emo);
    }, [emo]);

    const handleChangeEmo = (type) => {
        setEmo((type == emo ? "all" : type));
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <LinearGradient
                colors={[
                    Colors.primary,
                    Colors.primaryFade
                ]}
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 0.9,
                    y: 0.7
                }}
                style={StyleSheet.absoluteFill}
            />
            <View style={[styles.container, {padding: 0}]}>
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
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={homeStyles.emos}>
                        <Pressable onPress={() => {
                            handleChangeEmo("fun");
                        }}>
                            <Image style={homeStyles.emoImg} source={require("./../../assets/images/emo/fun.png")}/>
                        </Pressable>
                        <Pressable onPress={() => {
                            handleChangeEmo("sad");
                        }}>
                            <Image marginT-16 style={homeStyles.emoImg} source={require("./../../assets/images/emo/sad.png")}/>
                        </Pressable>
                        <Pressable onPress={() => {
                            handleChangeEmo("angry");
                        }}>
                            <Image marginT-16 style={homeStyles.emoImg} source={require("./../../assets/images/emo/angry.png")}/>
                        </Pressable>
                    </View>
                    <Image style={homeStyles.catImg} source={require("./../../assets/images/cat2.png")}/>
                </View>
                <Text style={homeStyles.emoTitle}>#{emo}</Text>
                <View style={styles.card}>
                    <View style={homeStyles.captionContent}>
                        
                    </View>
                    <View style={homeStyles.menu}>
                        <Pressable style={homeStyles.menuBtn}>
                            <Text orange80 style={homeStyles.menuLabel}>Bỏ qua</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}