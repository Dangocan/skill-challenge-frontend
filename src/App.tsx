import React from "react";
import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          padding: "1em",
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          id="Header"
          style={{ width: "100%", display: "flex", justifyContent: "right" }}
        >
          <input type="text" style={{ marginRight: "1em" }} />
          <select name="select">
            <option selected disabled>
              Sort
            </option>
            <option value="valor1">Mais antigas</option>
            <option value="valor2">Mais novas</option>
          </select>
        </div>
        <div
          id="Logo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: "1px solid red",
            width: "100%",
            margin: "3em 0",
            padding: "1em 0",
          }}
        >
          <div
            id="IMAGEM_LOGO"
            style={{
              width: "80px",
              height: "80px",
              border: "1px solid red",
            }}
          />
          <h1>Space Flight News</h1>
        </div>
        <div
          id="Content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid blue",
            width: "100%",
          }}
        >
          <div
            className="Card"
            style={{
              display: "flex",
              // flexDirection: "row-reverse", Inverter com numeros pares
              alignItems: "center",
              border: "1px solid blue",
            }}
          >
            <div
              id="IMAGEM_CARD"
              style={{
                width: "300px",
                height: "150px",
                border: "1px solid red",
              }}
            />
            <div
              className="cardContent"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                border: "1px solid green",
              }}
            >
              <h2>Tenete ergo quod si servitos</h2>
              <div
                className="cardSubtitle"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid green",
                  alignItems: "center",
                }}
              >
                <p>dd/mm/yyyy</p>
                <a
                  href="./"
                  style={{
                    border: "1px solid green",
                    textDecoration: "none",
                  }}
                >
                  newsSite
                </a>
              </div>
              <p>
                opus igitur est dicere possit dura omni specie, "tu autem in
                specie, non videntur, nec omnino res est." Et examine ab eis
                praecepta eius quae
              </p>
              <button style={{ padding: ".5em 1em" }}>Ver Mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
