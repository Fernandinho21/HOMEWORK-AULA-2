import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import UserCard from "../components/UserCard";

const usuarios = [
  { nome: "Nicoly", profissao: "Dev Frontend" },
  { nome: "João", profissao: "Mobile Developer" },
  { nome: "Ana", profissao: "UI/UX Designer" },
  { nome: "Carlos", profissao: "Backend Engineer" },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f1a" />
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>👥 UserCard Screen</Text>
        <Text style={styles.subtitle}>{usuarios.length} usuários cadastrados</Text>

        <View style={styles.list}>
          {usuarios.map((user, index) => (
            <UserCard key={index} nome={user.nome} profissao={user.profissao} />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0f0f1a",
  },
  container: {
    padding: 24,
    paddingTop: 40,
  },
  title: {
    color: "#f1f5f9",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 4,
  },
  subtitle: {
    color: "#64748b",
    fontSize: 14,
    marginBottom: 28,
  },
  list: {
    gap: 4,
  },
});
