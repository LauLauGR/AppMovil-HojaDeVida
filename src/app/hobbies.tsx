import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="heart-outline" size={90} color="#2563eb" />
        <Text style={estilos.nombre}>Laurith Sofía Gil Rodríguez</Text>
        <Text style={estilos.subtitulo}>Interéses / Hobbies</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaHobby
          nombre="Bailar"
          descripcion="Me gusta bailar en mi tiempo libre."
          nombreIcono="heart-outline"
          onPress={() =>
            Alert.alert("Bailar", "Me gusta bailar salsa, merengue, entre más clásicos.")
          }
        />
        <TarjetaHobby
          nombre="Música"
          descripcion="Escucho música mientras programo."
          nombreIcono="musical-notes-outline"
          onPress={() =>
            Alert.alert("Música", "Me gusta escuchar música de diferentes géneros, especialmente pop y boleros.")
          }
        />
        <TarjetaHobby
          nombre="Videojuegos"
          descripcion="Juego para distraerme."
          nombreIcono="game-controller-outline"
          onPress={() =>
            Alert.alert("Videojuegos", "Me gusta jugar videojuegos moviles y de PC, especialmente de diseño y estrategia.")
          }
        />
      </View>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 1,
  },
});