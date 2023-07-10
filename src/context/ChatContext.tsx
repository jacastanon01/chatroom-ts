import React, { createContext, useReducer, useState } from "react";

export interface IContactsType {
  id: number;
  name: string;
  message?: string;
}

interface IStateType {
  selectedId: number;
  contacts: IContactsType[];
}

interface IActionType {
  type: "SELECT_CONTACT" | "CHANGE_MESSAGE" | "SEND_MESSAGE" | "";
  contactId: number;
  chatMessage?: string;
}

const intialState: IStateType = {
  selectedId: 0,
  contacts: [
    {
      id: 0,
      name: "Mom",
      message: ""
    },
    {
      id: 1,
      name: "Diana",
      message: ""
    },
    {
      id: 2,
      name: "Rocc",
      message: ""
    }
  ]
};

function chatReducer(state: IStateType, action: IActionType): IStateType {
  switch (action.type) {
    case "SELECT_CONTACT":
      console.log(state);
      return {
        selectedId: action.contactId,
        // contacts: state.contacts.map((c) => {
        //   if (c.id === action.contactId) {
        //     return { ...c, message: "" };
        //   } else return c;
        // })
        contacts: [...state.contacts]
      };
    case "CHANGE_MESSAGE":
      return {
        ...state,
        contacts: state.contacts.map((c) => {
          if (c.id === state.selectedId) {
            return {
              ...c,
              message: action.chatMessage
            };
          } else return c;
        })
      };
    case "SEND_MESSAGE":
      return state;
    default:
      return state;
  }
}

export const ChatContext = createContext<{
  state: IStateType;
  dispatch: React.Dispatch<IActionType>;
}>({
  state: intialState,
  dispatch: () => {}
});

export const ChatContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(chatReducer, intialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
