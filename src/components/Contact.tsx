import { useContext, useRef, useState } from "react";
import { ChatContext, IContactsType } from "../context/ChatContext";

type ContactProps = {
  key: number;
  contact: IContactsType;
};

const Contact = ({ contact }: ContactProps) => {
  //const activeRef = useRef<{active: RefType | null}>(null)
  const { state, dispatch } = useContext(ChatContext);
  return (
    <button
      //ref={activeRef}
      onClick={() => {
        dispatch({
          type: "SELECT_CONTACT",
          contactId: contact.id
        });
        //activeRef.current = contact.id
      }}
    >
      {contact.name}
    </button>
  );
};

export default Contact;
