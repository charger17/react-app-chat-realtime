import React, { useContext } from "react";
import { ChatContext } from "../context/ChatProvider";

const NavBar = () => {
  const { usuario, ingresoUsuario, cerrarSesion, mensajes, agregarMensajes } = useContext(ChatContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">Chat</span>
      <div>
        {usuario.estado ? (
          <button 
            className="btn btn-outline-danger my-2"
            onClick={() => cerrarSesion()}
          >
            Cerrar Sesion
          </button>
        ) : (
          <button 
            className="btn btn-outline-success my-2"
            onClick={() => ingresoUsuario()}
          >
            Acceder
            </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
