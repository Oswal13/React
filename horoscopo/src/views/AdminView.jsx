import React from 'react'
import {  Table,Button,Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,} from "reactstrap";
import horoscopo from "../data/horoscopo"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminView() {

  //const [datos,setDatos] = useState(horoscopo)
  const [openEdit,setopenEdit]=useState(false)
  
  const [datoSelec,setDatosSelec]=useState(null)
  
  const llaveModal = (elemento)=>{
    setopenEdit(!openEdit)
    setDatosSelec(elemento)
  }

   

  return (
    <div className='Admin-v'>
     <Container>
      <Table className='Table'>
        <thead><tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Informacion</th>
          <th>Icono</th>
          <th>Fecha</th>
          <th>Accion</th>
        </tr></thead>
        <tBody>
          {horoscopo.map((elemento)=>(
            <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>{elemento.Titulo}</td>
              <td>{elemento.Informacion}</td>
              <td>{elemento.Simbolo}</td>
              <td>{elemento.fecha}</td>
              <td><Button onClick={()=>llaveModal(elemento)}>Editar</Button></td>
            </tr>
          ))}
        </tBody>
      </Table>
     </Container>
     
     <Modal isOpen={openEdit} toggle={llaveModal} >
      <ModalHeader>
        Editar {datoSelec ? datoSelec.Titulo : ""}
      </ModalHeader>
      <ModalBody>
        Que picha mae!
      </ModalBody>
      <ModalFooter>
            <button type="button" onClick={llaveModal}>Cerrar</button>
      </ModalFooter>
     </Modal>

    </div>
  )
}

export default AdminView