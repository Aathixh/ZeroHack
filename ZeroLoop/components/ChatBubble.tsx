import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ChatBubbleProps = {
  role: "user" | "model";
  text: string;
  onSpeech: () => void;
};

const ChatBubble = ({ role, text, onSpeech }: ChatBubbleProps) => {
  return (
    <View
      style={[
        styles.chatItem,
        role === "user" ? styles.userChatItem : styles.modelChatItem,
      ]}
    >
      <Text style={styles.chatText}>{text}</Text>
      {role === "model" && (
        <TouchableOpacity onPress={onSpeech} style={styles.modelChatItem}>
          <Ionicons name="volume-high-outline" size={24} color="#fff  " />
        </TouchableOpacity>
      )}
      ,
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    padding: 10,
    marginBottom: 10,
    maxWidth: "70%",
    borderRadius: 10,
    position: "relative",
  },
  userChatItem: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
  },
  modelChatItem: {
    alignSelf: "flex-start",
    backgroundColor: "#000",
  },
  chatText: {
    fontSize: 16,
    color: "#fff",
  },
  speakerIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});
export default ChatBubble;
