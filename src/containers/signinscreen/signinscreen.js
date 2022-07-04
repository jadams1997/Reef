import React {useState, useContext} from "react";
import LoginScreen from "react-native-login-screen";

const SignInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext);

    return (
        <LoginScreen    
            logoImageSource={require("../../assets/Circle_Logo.png")}
            onLoginPress={() => signIn({email, password})}
            onSignupPress={() => {}}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
        />
    );
}

export { SignInScreen };