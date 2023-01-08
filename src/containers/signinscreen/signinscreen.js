import React, {useState, useContext} from "react";
import {Image, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View} from "react-native";
import {ViewScreenWrapper} from "../../components/base.components"
import {AuthContext} from "../../contexts/authorisationcontext"
import {colors, sizes} from "../../globals"

const SignInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext);

    return (
            <KeyboardAvoidingView
                behavior={Platform.OS==="ios"?"padding":"height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback 
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.inner}>
                        <Image
                            source={require("../../assets/Circle_Logo.png")}
                            style={styles.image}
                        />
                        <TextInput
                            onChangeText={setEmail}
                            value={email}
                            placeholder={"Email"}
                            placeholderTextColor={"grey"}
                            style={styles.text}
                        />
                        <TextInput
                            onChangeText={setPassword}
                            value={password}
                            placeholder={"Password"}
                            placeholderTextColor={"grey"}
                            style={styles.text}
                        />
                        <Pressable
                            onPress={() => signIn({email, password})}
                            style={styles.login}
                        >
                            <Text style={styles.logintext}>
                                {"Login"}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {}}
                            style={styles.create}
                        >
                            <Text style={styles.createtext}>
                                {"Create an Account"}
                            </Text>
                        </Pressable>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner:{
        justifyContent: 'flex-end'
    },
    image: {
        height:100,
        width: 100,
        marginTop: 150,
        marginBottom: 60,
        alignSelf: 'center'
    },
    text: {
        width: sizes.w-sizes.w10,
        height: 44,
        paddingTop: 10,
        paddingBottom: 6,
        paddingLeft: 8,
        paddingRight: 5,
        borderBottomWidth: .7,
        borderColor: colors.spaceGrey,
        marginTop: 8,
        alignSelf: 'center',
        textAlign: 'left',
        fontSize: 17,
        color: colors.spaceGrey
    },
    login: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 30,
        borderRadius: 12,
        width: sizes.w2,
        backgroundColor: 'red'
    },
    logintext: {
        color: 'black',
        fontSize: 20

    },
    create: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        width: sizes.w2,
        backgroundColor: 'purple'
    },
    createtext: {
        color: colors.lightBlue,
        fontSize: 17
    }
});

export { SignInScreen };