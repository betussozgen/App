import React, { useState } from "react";
import { SafeAreaView, Text } from 'react-native';
import styles from './/Sign.style';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';


import { showMessage } from "react-native-flash-message";
import autherrorMessageParser from '../../../utils/autherrorMessageParser';

import Input from "../../../components/Input";
import Button from "../../../components/Button";


const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
};

const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        navigation.goBack();
    };

    async function handleFormSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor.',
                type: 'danger',
            })
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            navigation.navigate('LoginPage')
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: "success",
            });

            setLoading(false);
        } catch (error) {
            showMessage({
                message: autherrorMessageParser(error.code),
                type: "danger",
            });

            setLoading(false);

        }
        console.log(formValues);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            value={values.usermail}
                            onType={handleChange('usermail')}
                            placeholder="e-postanızı giriniz..."
                        />
                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder="şifrenizi giriniz..."
                            isSecure />
                        <Input
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            placeholder="şifrenizi tekrar giriniz..."
                            isSecure />
                        <Button text="Giriş Yap"
                            onPress={handleSubmit}
                            loading={loading} />
                    </>
                )}
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default Sign;