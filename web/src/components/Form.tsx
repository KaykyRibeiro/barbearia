import { useState } from "react";
const Form = () => {
  // Obtém a data atual no formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  // Estado para armazenar a data selecionada
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <form className="flex flex-col">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-0  mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium">Nome:</label>
          <input type="text" placeholder="Digite seu nome" className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-52" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium">Telefone:</label>
          <input type="nunber" placeholder="Digite seu telefone" className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-52" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-0  mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium">Serviço:</label>
          <select name="serviço" id="servico" required className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56">
            <option value="" className="text-neutral-400">Selecione um serviço</option>
            <option value="cabelo">Corte de cabelo</option>
            <option value="barba">Corte de barba</option>
            <option value="sobrancelha">Sobrancelha</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium">Profissional:</label>
          <select name="serviço" id="servico" required className="text-md- bg-neutral-300 py-1 px-3 rounded-xl w-56" >
            <option value="">Selecione um barbeiro</option>
            <option value="barbeiro">Nome barbeiro</option>
          </select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-2  mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium">Data:</label>
          <input
            type="date"
            className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56"
            value={selectedDate} // Define o valor padrão como a data de hoje
            min={today} // Bloqueia a seleção de datas anteriores
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-medium">Horário:</label>
          <select name="serviço" id="servico" required className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56">
            <option value="">Selecione o horario</option>
            <option value="11.00">11:00</option>
          </select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-2  mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium">Pagamento:</label>
          <select name="serviço" id="servico" required className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56">
            <option value="">Selecione a forma de pagamento</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
            <option value="debito">Cartão de Débito</option>
            <option value="credito">Cartão de Crédito</option>
          </select>
        </div>
        <div className="flex justify-end pr-10">
          <label className="text-sm font-bold">Valor: <span className="text-2xl text-green-800">R$ 50,00</span></label>
        </div>
      </div>


      <button className="bg-lime-600 text-neutral-100 text-xl font-bold p-2 rounded mx-10 mt-10">Agendar</button>
    </form>
  )
}

export default Form
