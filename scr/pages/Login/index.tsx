import {View, 
        Text, 
        StyleSheet,
        Image,
        TextInput,
        TouchableOpacity,
        Alert,
        ActivityIndicatorBase,
        ActivityIndicator
}from "react-native";

import { style } from "./styles"
import Logo from "../../assets/logo.png"

import {MaterialIcons} from '@expo/vector-icons'; 
import { themas } from "../../global/themes";
import { useState } from "react";
import { Input } from "../../components/input";
export default function Login() {
  const [email, setEmail] = useState('tiagomadeira421@gmail.com')
  const [password, setPassword] = useState('tigazz10')
  const [loading, setLoading] = useState(false)



 async function getLogin(){
    try {
      setLoading(true)

      if(!email || !password){
        return Alert.alert('Atenção!', 'Informe os campos obrigatótios.')
      }

      setTimeout(()=>{
        if( email == 'tiagomadeira421@gmail.com' && password == 'tigazz10'){
          Alert.alert('Logado com sucesso')
        }else {
          Alert.alert('Usuário não encontrado')
        }
        setLoading(false)
      }, 3000)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
       <Image
        source={Logo}
        style={style.logo}
        resizeMode="contain"
       />
       <Text style={style.text}>Bem vindo!</Text>
       
      </View>

      <View style={style.boxMid}>
         <Text style={style.titleInput}>ENDEREÇO E-MAIL</Text> 

         <Input/>

         <View style={style.BoxInput}>
          <TextInput
          style={style.input}
          value={email}
          onChangeText={(e) => setEmail(e)}
          />
          <MaterialIcons
          name='email'
          size = {20}
          color={themas.colors.gray}
          />
         </View>
         <Text style={style.titleInput}>SENHA</Text>
           <View style={style.BoxInput}>
          <TextInput
          style={style.input}

          value={password}
          onChangeText={setPassword}
          />
          <MaterialIcons
          name='remove-red-eye'
          size = {20}
          color={themas.colors.gray}
          />
         </View> 
      </View>

      <View style={style.boxBottom}>
         <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
          {
          loading?
          <ActivityIndicator color={'#FFFF'} size={'small'}/>
          :
          <Text style={style.textButton}>ENTRAR</Text>
          }
         </TouchableOpacity>
      </View>
      <Text style={{color:themas.colors.gray}}>Não possui conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text> 
    </View>
  );
}

const styles = StyleSheet.create({

});

