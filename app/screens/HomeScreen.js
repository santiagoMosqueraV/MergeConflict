import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi Home</Text>

        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='CLIENTES'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
                <Button
                    title='DIRECCIONES'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
                <Button
                    title='Galeria'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
            </View>



            <Button
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNav');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {

        marginRight: 60,

    },
});
