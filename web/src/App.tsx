import Form from "./components/Form"

function App() {
  return (
    <div className="w-full min-h-screen md:flex lg:flex-row md:flex-col sm:flex-col lg:justify-between justify-center  items-center gap-40 bg-neutral-900 overflow-x-hidden">
      <div className="xl:w-2/12 lg:w-0 md:w-0 sm:w-0">

      </div>
      <div className="xl:w-4/12 md:w-8/12 sm:w-screen h-auto p-8 bg-neutral-200 md:rounded-4xl rounded-none ">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-20 h-20 bg-amber-950"></div>
          <h1 className="text-3xl font-bold">Barbearia</h1>
          <p className="text-md font-medium text-center">Preencha o formulário abaixo para agendar seu horário!</p>
        </div>
        <div>
          <Form />
        </div>
      </div>
      <div className="xl:w-4/12 lg:w-6/12 md:w-8/12 sm:w-screen lg:me-10 flex md:justify-center sm:justify-center md:mb-10 ">
        <div className="xl:w-8/12 w-12/12 h-auto p-5 bg-neutral-950 text-neutral-100">
          <h2>Rua B. Colonia do Piagui, Guaratinguetá - SP</h2>
          <div>
            <p>Whatsapp: (11) 99999-9999</p>
            <p>Whatsapp: (12) 99999-9999</p>
            <p>Instagram: @barbearia</p>
            <p>Facebook: @barbearia</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
