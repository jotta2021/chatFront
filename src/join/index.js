import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { IoChatbox } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import formatDate from "../helpers/formatDate";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import PopupEmojis from "./popupEmojis";

function Join() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [socket, setSocket] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [typingUsers, setTypingUsers] = useState({}); // Armazenar os usuários digitando, deve ser um objeto
  const [openPopover, setOpenPopover] = useState(false);
const messagesEndRef = useRef(null)
  // Realiza a primeira conexão com o socket
  async function Connect() {
    if (name !== "") {
      const socket = io.connect("http://localhost:3000");
      socket.emit("join", name);
      setSocket(socket);
    }
  }

  // Envia a mensagem
  async function SendMessage(e) {
    e.preventDefault(); // Evita o envio do formulário
    if (message !== "") {
      socket.emit("stopTyping"); // Emitir evento para parar de digitar
      setTypingUsers((prev) => {
        const updated = { ...prev };
        delete updated[socket.id]; // Remover o usuário que parou de digitar
        return updated;
      });
      socket.emit("message", message);
      setMessage(""); // Limpa a mensagem após o envio
    }
  }

  // Atualiza a mensagem digitada
  async function onChangeMessage(e) {
    setMessage(e.target.value);
    socket.emit("typing"); // Emitir evento de "digitando"
  }

  // Efetua a escuta dos eventos de mensagens e usuários digitando
  useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", (data) => {
        setMessageList((prev) => [...prev, data]);
      });

      socket.on("userTyping", (data) => {
        setTypingUsers((prev) => ({
          ...prev,
          [data.authorId]: data.author, // Armazena o autor que está digitando
        }));
      });

      socket.on("userStopTyping", (data) => {
        setTypingUsers((prev) => {
          const updated = { ...prev };
          delete updated[data.authorId]; // Remove o usuário da lista de digitando
          return updated;
        });
      });

      return () => {
        socket.off("receiveMessage");
        socket.off("userTyping");
        socket.off("userStopTyping");
      };
    }
  }, [socket]);


  useEffect(()=> {
if(messagesEndRef.current){
    messagesEndRef.current.scrollIntoView({behavior:'smooth'})
}

  },[messageList])
  return (
    <div
      className="w-full h-screen  flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      {!socket ? (
        <div className="w-[30%] h-[30%] max-md:w-[80%] bg-white border rounded-sm flex flex-col items-center p-4 shadow-md">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold font-lg text-primary">Chat em tempo real</h1>
            <IoChatbox size={24} className="text-primary" />
          </div>
          <div className="flex items-center justify-center h-full w-full">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o seu nome"
              className="outline-none border-b-2 px-2 focus:border-primary transition-colors"
            />
          </div>
          <button
            className="bg-primary p-2 text-white px-4 rounded-sm hover:bg-secondary duration-300"
            onClick={Connect}
          >
            Iniciar chat
          </button>
        </div>
      ) : (
        <div className="w-[30%] h-[90%] max-md:w-[90%] max-md:h-[70%] bg-white border rounded-sm flex flex-col items-center p-4 shadow-md transition-all">
          <div className="flex items-center gap-2 border-b w-full pb-2">
            <h1 className="font-semibold font-lg text-primary">Chat em tempo real</h1>
            <IoChatbox size={24} className="text-primary" />
          </div>

          {/* Mensagens */}
          <div className="w-full h-[85%] py-4 flex-col inline-flex overflow-y-auto gap-1"
        
          >
            {messageList.map((item, index) => {
              const you = socket.id === item.authorId;
              return (
                <div
                  key={index}
                  className={`${you && " ml-auto"} rounded-md text-white p2- max-w-fit flex flex-col`}
                >
                  <div
                    className={`${
                      you ? "bg-primary text-white" : "bg-[#e6e6e6] text-black"
                    } rounded-md text-black p-2 inline-block`}
                  >
                    <p>{item.message}</p>
                    <p className={`text-xs ${you && " float-end"}`}>
                      {formatDate(item.date)}
                    </p>
                  </div>

                  <span className={`text-black text-[0.7rem] ${you && "ml-auto"}`}>
                    {you ? "você" : item.author}
                  </span>
                </div>
              );
            })}

          
            {Object.keys(typingUsers).length > 0 && (
              <div className="bg-[#e6e6e6] text-black rounded-md p-2 inline-block max-w-32">
                <p>Digitando...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {openPopover && (
            <div className="bg-gray-50 w-full rounded-sm p-2 ">
              <PopupEmojis setMessage={setMessage} />
            </div>
          )}

          <form className="w-full my-2 flex gap-2" onSubmit={SendMessage}>
            <button
              type="button" // Alterado para type="button" para não disparar o envio
              className="bg-[#e6e6e6] p-2 rounded-sm hover:bg-slate-300 duration-300"
              onClick={() => setOpenPopover(!openPopover)}
            >
              {openPopover ? (
                <IoMdClose size={24} className="text-primary" />
              ) : (
                <MdOutlineEmojiEmotions size={24} className="text-primary" />
              )}
            </button>

            <input
              className="w-full border outline-none px-2"
              value={message}
              onChange={onChangeMessage}
            />

            <button
              type="submit" // Apenas o botão de envio agora dispara o envio
              className="bg-[#e6e6e6] p-2 rounded-sm hover:bg-slate-300 duration-300"
            >
              <IoIosSend size={24} className="text-primary" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Join;
