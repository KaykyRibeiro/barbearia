import { useState, useEffect } from "react";

const Form = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    cli_name: "",
    cli_tel: "",
    service_desc: "",
    service_pag: "",
    date: today,
    barber_name: "",
    horario: "",
  });

  // Estado para armazenar a lista de barbeiros
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/barbers");
        if (response.ok) {
          const data = await response.json();
          setBarbers(data); // Supondo que data seja um array de barbeiros
        } else {
          console.error("Erro ao buscar barbeiros");
        }
      } catch (error) {
        console.error("Erro ao buscar barbeiros:", error);
      }
    };

    fetchBarbers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/services-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Agendamento realizado com sucesso!");
        setFormData({
          cli_name: "",
          cli_tel: "",
          service_desc: "",
          service_pag: "",
          date: today,
          barber_name: "",
          horario: "",
        });
      } else {
        alert("Erro ao enviar os dados!");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-0 mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium">Nome:</label>
          <input type="text" name="cli_name" value={formData.cli_name} onChange={handleChange} placeholder="Digite seu nome" className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-52" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium">Telefone:</label>
          <input type="nunber" name="cli_tel" value={formData.cli_tel} onChange={handleChange} placeholder="Digite seu telefone" className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-52" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-0  mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium">Serviço:</label>
          <select name="service_desc" id="servico" value={formData.service_desc} onChange={handleChange} required className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56">
            <option value="" className="text-neutral-400">Selecione um serviço</option>
            <option value="cabelo">Corte de cabelo</option>
            <option value="barba">Corte de barba</option>
            <option value="sobrancelha">Sobrancelha</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium">Profissional:</label>
          <select
            name="barber_name"
            value={formData.barber_name}
            onChange={handleChange}
            required
            className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56"
          >
            <option value="">Selecione um barbeiro</option>
            {barbers.map((barber: { id: number; barber: string }) => (
              <option key={barber.id} value={barber.barber}>
                {barber.barber}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-2  mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium" >Data:</label>
          <input
            type="date"
            name="date"
            value={formData.date} // Usa o estado formData.data
            min={today} // Bloqueia datas passadas
            onChange={handleChange}
            className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-medium">Horário:</label>
          <select name="horario" value={formData.horario} onChange={handleChange} id="servico" required className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56">
            <option value="">Selecione o horario</option>
            <option value="11:00">11:00</option>
          </select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 xl:gap-2  mb-5">
        <div className="flex flex-col">
          <label className="text-xs font-medium" >Pagamento:</label>
          <select name="service_pag" id="servico" value={formData.service_pag} onChange={handleChange} required className="text-md bg-neutral-300 py-1 px-3 rounded-xl w-56">
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


      <button type="submit" className="bg-lime-600 text-neutral-100 text-xl font-bold p-2 rounded mx-10 mt-10">Agendar</button>
    </form>
  )
}

export default Form
