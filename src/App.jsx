import { useState, useEffect } from "react"
import Formulario from "./componentes/Formulario"
import Header from "./componentes/Header"
import ListadoPacientes from "./componentes/ListadoPacientes"




function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? [])
  const [paciente, setPaciente] = useState({}) // cada uno de los pacientes es un objeto 

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes)) // JSON.stringly lo convierte en un string
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)

  }



  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
      <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
      
      />

      <ListadoPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente={eliminarPaciente}
      />

      </div>
      
    </div>
  )
}

export default App
