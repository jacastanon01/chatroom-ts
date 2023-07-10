import Contact from "./Contact";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";

const Chat = () => {
  const { state, dispatch } = useContext(ChatContext);
  return (
    <main className="App">
      <aside>
        {state.contacts.map((c) => (
          <Contact key={c.id} contact={c} />
        ))}
      </aside>
      <Message />
    </main>
  );
};

export default Chat;
