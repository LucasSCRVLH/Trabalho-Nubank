import { useState } from "react"
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function Pix({ navigation, route }) {

    const { saldo, setSaldo } = route.params;
    const [chavePix, setChavePix] = useState("");
    const [valorPix, setValorPix] = useState("");
    const enviarPix = () => {

        const valor = parseFloat(valorPix);

        if (valor <= saldo) {

            setSaldo(saldo - valor);

            navigation.goBack();




        } else {

            alert("Saldo insuficiente")

        }


    }
    return (


        <View>

            <Text>Chave Pix</Text>
            <TextInput placeholder="Insira uma chave pix" value={chavePix} onChangeText={setChavePix} />


            <Text>Valor</Text>
            <TextInput placeholder="Digite um valor" value={valorPix} onChangeText={setValorPix} keyboardType="numeric" />
            <Button title="Enviar pix" onPress={enviarPix} />




        </View>


    );






}