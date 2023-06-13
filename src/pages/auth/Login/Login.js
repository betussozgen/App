import React from "react";
import { SafeAreaView } from 'react-native';
import styles from './Login.syle';
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Input placeholder="e-postanızı giriniz..." />
            <Input placeholder="şifrenizi giriniz..." />
            <Button text="Giriş Yap" />
            <Button text="Kayıt Ol" theme="secondary" />
        </SafeAreaView>
    )
}

export default Login;