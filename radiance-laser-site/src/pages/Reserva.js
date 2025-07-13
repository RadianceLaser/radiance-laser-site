import React, { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function Reserva() {
  const [data, setData] = useState("");
  const [periodo, setPeriodo] = useState("manha");

  const handleReserva = async () => {
    try {
      const reserva = {
        data,
        periodo,
        clienteId: auth.currentUser.uid
      };
      await addDoc(collection(db, "reservas"), reserva);
      alert("Reserva feita com sucesso!");
    } catch (error) {
      alert("Erro ao fazer reserva: " + error.message);
    }
  };

  return (
    <div className="container">
      <h2>Nova Reserva</h2>
      <input type="date" value={data} onChange={e => setData(e.target.value)} />
      <select value={periodo} onChange={e => setPeriodo(e.target.value)}>
        <option value="manha">Manhã (7h–12h)</option>
        <option value="tarde">Tarde (13h–18h)</option>
        <option value="integral">Integral (7h–18h)</option>
      </select>
      <button onClick={handleReserva}>Reservar</button>
      <button onClick={() => signOut(auth)}>Sair</button>
    </div>
  );
}
