import "./styles.css";
import Chat from "./components/Chat";
import { ChatContextProvider } from "./context/ChatContext";

export default function App() {
  return (
    <ChatContextProvider>
      <Chat />
    </ChatContextProvider>
  );
}
