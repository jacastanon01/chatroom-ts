import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Message = () => {
  const { state, dispatch } = useContext(ChatContext);
  const { selectedId, contacts } = state;
  const contact = contacts[selectedId];
  return (
    <section className="message__box">
      <textarea
        value={contact.message}
        className="message__input"
        onChange={(e) => {
          dispatch({
            type: "CHANGE_MESSAGE",
            chatMessage: e.target.value,
            contactId: contact.id
          });
        }}
      />
      <button
        className="message__btn"
        onClick={() => {
          alert(`message: ${contact.message} has been sent to ${contact.name}`);
        }}
      >
        Send to {contact.name}
      </button>
    </section>
  );
};

export default Message;
