import { useState , useEffect} from "react"
import Error from "./Error";

const Formulario = ({pacientes,setPacientes, paciente , setPaciente}) => { //Estos son props
  const [nombre, setNombre] = useState(""); /* EL USESTATE SIEMPRE VA ANTES DEL return*/
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error , setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length>0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if( [nombre , propietario , email , alta , sintomas].includes("") ) {
      console.log("Hay al menos un campo vacio")

      setError(true)
      return;

    }

    setError(false) // Para que regrese el false
    const generarId = () => {
      const random = Math.random().toString(36).substring(2)
      const fecha = Date.now().toString(36)

      return random + fecha
    }

    // objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,      
    }

    if (paciente.id) {
      // EDITANDO EL REGISTRO
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})

    }else {
      //nuevo REGISTRO
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

     

    //REINICIAR EL FORMULARIO
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

        <p className="text-center text-xl mt-5 mb-10">
          Añade Paciente y {""}
          <span className="text-indigo-600 font-bold">Administralos</span> 
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

          {error && <Error mensaje = "Todos los campos son obligatorios"/> }

          <div className="mb-5">
            <label htmlFor = "paciente" className="block text-gray-700 uppercase font-bold">Nombre de la mascota</label>

            <input 
            id="paciente"
            type="text" 
            placeholder="Nombre de la mascota"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} /* Esto es un evento de react*/
            />

          </div>

          <div className="mb-5">
            <label htmlFor = "propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>

            <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del propietario"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            />

          </div>

          <div className="mb-5">
            <label htmlFor = "email" className="block text-gray-700 uppercase font-bold">Email de contacto</label>

            <input 
            id="email"
            type="email" 
            placeholder="Email de contacto"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="mb-5">
            <label htmlFor = "alta" className="block text-gray-700 uppercase font-bold">Alta</label>

            <input 
            id="alta"
            type="date" 
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            />

          </div>

          <div className="mb-5">
            <label htmlFor= "sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>

            <textarea 
            id="sintomas"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />

          </div>

          <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value= {paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
            />


        </form>
    </div>
  )
}

export default Formulario