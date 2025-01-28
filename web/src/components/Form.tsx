const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-0  mb-5">
        <div className="flex flex-col">
          <label>Nome:</label>
          <input type="text" placeholder="Digite seu nome" />
        </div>
        <div className="flex flex-col">
          <label>Telefone:</label>
          <input type="nunber" placeholder="Digite seu telefone" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-0  mb-5">
        <div className="flex flex-col">
          <label>Serviço:</label>
          <select name="serviço" id="servico" required >
            <option value="">Selecione um serviço</option>
            <option value="cabelo">Corte de cabelo</option>
            <option value="barba">Corte de barba</option>
            <option value="sobrancelha">Sobrancelha</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label >Profissional:</label>
          <select name="serviço" id="servico" required >
            <option value="">Selecione um barbeiro</option>
            <option value="barbeiro">Nome barbeiro</option>
          </select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-2  mb-5">
        <div className="flex flex-col">
          <label >Horário:</label>
          <select name="serviço" id="servico" required >
            <option value="">Selecione o horario</option>
            <option value="cabelo">Corte de cabelo</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label >Pagamento:</label>
          <select name="serviço" id="servico" required >
            <option value="">Selecione a forma de pagamento</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
            <option value="debito">Cartão de Débito</option>
            <option value="credito">Cartão de Crédito</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end pr-10 my-5">
        <label>Valor:</label>
      </div>

      <button>Agendar</button>
    </form>
  )
}

export default Form
