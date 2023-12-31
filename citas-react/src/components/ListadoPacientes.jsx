const ListadoPacientes = () => {
  return (
    <div className="w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
      </div>

    </div>
  )
}

export default ListadoPacientes