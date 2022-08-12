import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => { // aqui extraigo el prop
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
      {pacientes && pacientes.length ? ( //SI ARREGLO TIENE ALGO RETORNA ESTE ENCABEZADO Y LOS PACIENTES
        <>
        <h2 className="font-black text-center text-3xl">Listado de Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Citas y Pacientes</span>
        </p>

      {pacientes.map(paciente => ( //itera y devuelve todos los campos del form
        <Paciente
          key = {paciente.id} //siempre tiene que haber un key para que cada elemento sea unico
          paciente = {paciente}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      ))}

      </>

      ) : ( // SI EL ARREGLO ESTA VACIO, RETORNAMOS ESTE ENCABEZADO
      
      <>
        <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando pacientes {''}
          <span className="text-indigo-600 font-bold">y aperecerán aquí</span>
        </p>
        
        
      </>

      )}

       
    </div>
  )
}

export default ListadoPacientes