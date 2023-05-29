import React, { useContext, useEffect, useRef } from "react";
import Agregar from "./Agregar";
import { ChatContext } from "../context/ChatProvider";

const Chat = () => {
  const { mensajes, usuario } = useContext(ChatContext);
  const refZonaChat = useRef(null);
  const formatDate = (date) => {
    const dateMessage = new Date(date);

    const moment = require("moment");
    const dateTimeFixed = moment(dateMessage).format("MMMM Do YYYY, h:mm a");

    return dateTimeFixed;
  };

  useEffect(() => {
    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
  }, [mensajes]);
  return (
    <div
      className="mt-3 px-2"
      style={{ height: "75vh", overflowY: "scroll", backgroundColor: '#E0E0E0' }}
      ref={refZonaChat}
    >
      {mensajes.map((item, index) =>
        usuario.uid === item.uid ? (
          <div className="d-flex justify-content-end my-2" key={index}>
            <div className="d-flex flex-column bd-highlight">
                {console.log(item)}
              <span className="badge bg-success"style={{textAlign: 'end'}}>
                {item.texto}
                <p style={{color: '#37474F', height: '1px'}}>{formatDate(item.fecha)}</p>
              </span>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-start my-2" key={index}>
            <div className="d-flex flex-column bd-highlight text-start">
              <span className="badge bg-danger" style={{textAlign: 'initial'}}>
                {item.texto}
                <p style={{color: '#37474F', height: '0.3px'}}>{formatDate(item.fecha)}</p>
              </span>
            </div>
          </div>
        )
      )}

      <Agregar />
    </div>
  );
};

export default Chat;
