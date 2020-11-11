import React, { useState, useContext } from 'react';

import { useForm, Controller } from "react-hook-form";

import AuthContext from "../../contexts/auth";

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default () => {

    const { login } = useContext(AuthContext);

    const [mensagemErro, setMensagemErro] = useState("");

    const { control, handleSubmit, errors } = useForm();

    const handleLogin = (inputs) => {
        login(inputs.usuario, inputs.senha)
            .then(
                () => { },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    console.log(resMessage);
                    setMensagemErro(resMessage);
                }
            );
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode='center'
                source={require('../../images/logo.png')}
            />
            <Text style={styles.logoText}>Engelive</Text>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Usuário"
                            placeholderTextColor="#444444"
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    </View>
                )}
                name="usuario"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.usuario && <Text style={styles.messages}>Campo obrigatório.</Text>}
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Senha"
                            placeholderTextColor="#444444"
                            secureTextEntry={true}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    </View>
                )}
                name="senha"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.senha && <Text style={styles.messages}>Campo obrigatório.</Text>}
            {!!mensagemErro && <Text style={styles.messages}>{mensagemErro}</Text>}
            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(handleLogin)}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: "20%"
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#444444",
        marginBottom: 20
    },
    inputView: {
        width: "80%",
        // backgroundColor: "#DCDCDC",
        borderRadius: 25,
        height: 50,
        marginTop: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#444444"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#444444",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    messages: {
        color: 'red'
    }
});