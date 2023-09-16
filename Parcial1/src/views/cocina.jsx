import React, { useState } from 'react';
import TarjRestaurant from '../Comp/TarjRestaurant';

function Cocina() {
  const [pedidos, setPedidos] = useState([]);
  const [regis, setRegis] = useState({
    Turno: 1,
    Pedido: '',
    Mesa: '',
    Mesero: '',
    Estado: 'Pendiente', // Por defecto, establece el estado como "Pendiente"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegis({ ...regis, [name]: value });
  };

  const handleSubmit = () => {
    const nuevoPedido = { ...regis };
    setPedidos([...pedidos, nuevoPedido]);

    setRegis((prevRegis) => ({ ...prevRegis, Turno: prevRegis.Turno + 1 }));
    setRegis({
      Turno: regis.Turno + 1,
      Pedido: '',
      Mesa: '',
      Mesero: '',
      Estado: 'Pendiente',
    });
  };

  // Función para cambiar el estado de "Pendiente" a "Entregado" o viceversa
  const toggleEstado = (indicador) => {
    const nuevosPedidos = [...pedidos];
    nuevosPedidos[indicador].Estado =
      nuevosPedidos[indicador].Estado === 'Pendiente' ? 'Entregado' : 'Pendiente';
    setPedidos(nuevosPedidos);
  };

  return (
    <div>
      <div>
        <p>Pedido:</p>
        <input
          type="text"
          name="Pedido"
          value={regis.Pedido}
          onChange={handleChange}
        />
        <p>Mesa:</p>
        <input
          type="text"
          name="Mesa"
          value={regis.Mesa}
          onChange={handleChange}
        />
        <p>Mesero:</p>
        <input
          type="text"
          name="Mesero"
          value={regis.Mesero}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Guardar Pedido</button>
      </div>

      {/* Mensaje de éxito */}
      {pedidos.length > 0 && (
        <p>Pedido registrado con éxito con el número de turno: {regis.Turno - 1}</p>
      )}

      {/* Lista de pedidos */}
      <div>
        <h2>Lista de Pedidos:</h2>
        {pedidos.map((pedido, indicador) => (
          <div key={indicador}>
            <TarjRestaurant
              turno={pedido.Turno}
              pedido={pedido.Pedido}
              mesa={pedido.Mesa}
              mesero={pedido.Mesero}
            />
            <button onClick={() => toggleEstado(indicador)}>
              {pedido.Estado === 'Pendiente' ? 'Entregado' : 'Pendiente'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocina;
