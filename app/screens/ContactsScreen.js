import {View, Text, StyleSheet, Button} from 'react-native'

export const Contacts = ({navigation}) => {
    return <View style={styles.container}>
        <Text>Contactos de clientes</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('Clientes');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  