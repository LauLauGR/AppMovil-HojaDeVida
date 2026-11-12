import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase-outline" size={90} color="#2563eb" />
        <Text style={estilos.nombre}>Laurith Sofía Gil Rodríguez</Text>
        <Text style={estilos.subtitulo}>Experiencia</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaExperiencia
          cargo="Vendedora"
          empresa="Scharon Sport"
          periodo="Temporada decembrina 2025"
          descripcion="Atendía a los clientes y realizaba ventas."
        />
      </View>
    </ScrollView>
  );
};

export default Experiencia;

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