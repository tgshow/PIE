import * as React from "react";
import ReactNative from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { style } from "./styles"


// Tipagem para localização
interface Coordenadas {
  latitude: number;
  longitude: number;
}

// Tipagem para o payload enviado
interface ProblemaPayload {
  categoria: string;
  descricao: string;
  fotoUri: string | null;
  localizacao: Coordenadas | null;
}

const RegistroProblema: React.FC = () => {
  const [categoria, setCategoria] = React.useState<string>("");
  const [descricao, setDescricao] = React.useState<string>("");
  const [fotoUri, setFotoUri] = React.useState<string | null>(null);
  const [localizacao, setLocalizacao] = React.useState<Coordenadas | null>(null);

  const pickImage = async (): Promise<void> => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permissão necessária", "Permita acesso às fotos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.7,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setFotoUri(result.assets[0].uri);
    }
  };

  const takePhoto = async (): Promise<void> => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permissão necessária", "Permita uso da câmera.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setFotoUri(result.assets[0].uri);
    }
  };

  const getLocation = async (): Promise<void> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão negada", "Permita acesso à localização.");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocalizacao({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });
  };

  const handleSubmit = (): void => {
    const payload: ProblemaPayload = {
      categoria,
      descricao,
      fotoUri,
      localizacao,
    };

    console.log("Enviar:", payload);
    Alert.alert("Sucesso", "Problema enviado! (mock)");
    // Aqui você pode integrar com sua API
  };

  return (
    <View style={style.card}>
      <Text style={style.title}>Registro de problemas urbanos</Text>

      <Text style={style.label}>Categoria</Text>
      <TextInput
        placeholder="Ex: Iluminação"
        value={categoria}
        onChangeText={setCategoria}
        style={style.input2}
      />

      <Text style={style.label}>Descrição</Text>
      <TextInput
        placeholder="Descreva o problema"
        value={descricao}
        onChangeText={setDescricao}
        style={[style.input2, { height: 100 }]}
        multiline
      />

      <Text style={style.label}>Foto</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={style.button} onPress={pickImage}>
          <Text>Adicionar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={takePhoto}>
          <Text>Usar Câmera</Text>
        </TouchableOpacity>
      </View>
      {fotoUri && <Image source={{ uri: fotoUri }} style={style.preview} />}

      <Text style={style.label}>Localização</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={style.button} onPress={getLocation}>
          <Text>Usar minha localização</Text>
        </TouchableOpacity>
      </View>
      {localizacao && (
        <Text>
          Lat: {localizacao.latitude.toFixed(6)}, Lon:{" "}
          {localizacao.longitude.toFixed(6)}
        </Text>
      )}

      <TouchableOpacity style={style.submit} onPress={handleSubmit}>
        <Text style={{ color: "#fff" }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistroProblema;

