import React from "react";
import { ChatContext } from "./context/ChatProvider.js";
import NavBar from "./components/NavBar.jsx";
import Chat from "./components/Chat.jsx";

const App = () => {
  const { usuario } = React.useContext(ChatContext);

  return usuario != null ? (
    <>
      <div>
        <NavBar />
        {usuario.estado ? (
          <Chat />
        ) : (
          <div className="lead text-sm-center mt-5">Debes iniciar sesion</div>
        )}
      </div>
    </>
  ) : (
    <div>Cargando</div>
  );
};

export default App;
