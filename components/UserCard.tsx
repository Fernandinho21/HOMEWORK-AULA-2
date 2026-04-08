import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type UserCardProps = {
  nome: string;
  profissao: string;
};

export default function UserCard({ nome, profissao }: UserCardProps) {
  const [online, setOnline] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLetter}>{nome.charAt(0).toUpperCase()}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.profissao}>{profissao}</Text>

        <View style={styles.statusRow}>
          <View style={[styles.dot, online ? styles.dotOnline : styles.dotOffline]} />
          <Text style={[styles.statusText, online ? styles.textOnline : styles.textOffline]}>
            {online ? "Online" : "Offline"}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.btn, online ? styles.btnOffline : styles.btnOnline]}
        onPress={() => setOnline((prev) => !prev)}
        activeOpacity={0.8}
      >
        <Text style={styles.btnText}>{online ? "Desconectar" : "Conectar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e2e",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    gap: 14,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#7c3aed",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarLetter: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    gap: 3,
  },
  nome: {
    color: "#f1f5f9",
    fontSize: 16,
    fontWeight: "700",
  },
  profissao: {
    color: "#94a3b8",
    fontSize: 13,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotOnline: { backgroundColor: "#22c55e" },
  dotOffline: { backgroundColor: "#64748b" },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  textOnline: { color: "#22c55e" },
  textOffline: { color: "#64748b" },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  btnOnline: { backgroundColor: "#7c3aed" },
  btnOffline: { backgroundColor: "#374151" },
  btnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
});
