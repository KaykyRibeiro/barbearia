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
        <div className="xl:w-8/12 w-12/12 h-auto p-2 bg-neutral-950 text-neutral-100 rounded-3xl">
          <div className="w-full bg-neutral-300 h-48 rounded-xl mb-4 ">
            a
          </div>
          <h2 className="text-xl font-semibold mx-2">Rua B. Colonia do Piagui, Guaratinguetá - SP</h2>
          <div className="mt-2 mx-4">
            <a href="" className="flex flex-row gap-2 items-center mb-2">
              <img src="./src/assets/whatsapp.png" alt="" className="w-5 h-5" />
              <p className="text-md font-mono">(11) 99999-9999</p>
            </a>
            <a href="" className="flex flex-row gap-2 items-center mb-2">
              <img src="./src/assets/whatsapp.png" alt="" className="w-5 h-5" />
              <p className="text-md font-mono">(12) 99999-9999</p>
            </a>
            <a href="" className="flex flex-row gap-2 items-center mb-2">
              <img src="./src/assets/instagram.png" alt="" className="w-5 h-5" />
              <p className="text-md font-mono">@barbearia</p>
            </a>
            <a href="" className="flex flex-row gap-2 items-center mb-2">
              <img src="./src/assets/facebook.png" alt="" className="w-5 h-5" />
              <p className="text-md font-mono">@barbearia</p>
            </a>

            
            
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 m-4">
        <div className="flex flex-row justify-between items-center gap-4">
          <img src="./src/assets/logo.jpg" alt="" className="w-8 h-8 rounded-full" />
          <h3 className="text-sm text-neutral-400">© 2025 - Todos os direitos reservados</h3>
        </div>
      </div>
    </div>
  )
}

export default App
