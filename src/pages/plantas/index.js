import React, { useEffect, useState } from 'react';

import { TouchableOpacity, FlatList, Text, View, StyleSheet } from 'react-native';

import AppService from '../../services/app.service.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.item}>{item.descricao}</Text>
    </TouchableOpacity>
);

const Plantas = ({ route, navigation }) => {
    const { idprojeto } = route.params;
    const [plantas, setPlantas] = useState([]);

    useEffect(() => {
        atualizarLista();
    }, []);

    const atualizarLista = () => {
        AppService.listPlantasPorProjeto(idprojeto)
            .then(data => {
                setPlantas(data);
            });
    };

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                // onPress={(item) => navigation.navigate('Details', { id: item.id })}
            // style={{ backgroundColor }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={plantas}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </View>
    );
};

export default Plantas;