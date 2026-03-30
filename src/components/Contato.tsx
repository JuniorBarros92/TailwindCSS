import { useState } from 'react';

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const Contato = () => {
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setEnviado(false);

    try {
      // simulação de envio (depois você pode trocar por API ou EmailJS)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Dados enviados:', form);

      setEnviado(true);
      setForm({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
      });
    } catch (error) {
      console.error('Erro ao enviar:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contato"
      className="container mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8"
    >
      {/* INFO */}
      <div>
        <h1 className="font-serif text-4xl text-verde-300 mb-4">
          Nossos Contatos
        </h1>

        <p className="text-gray-200 text-balance mb-8">
          Tem interesse em passar uma temporada na Forest? Entre em contato com
          a gente por telefone ou email.
        </p>

        <div className="grid gap-4">
          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">Base</h2>
            <p className="text-gray-300">
              Rua da Mata, 123 - Floresta Nacional - RJ
            </p>
          </div>

          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">Email</h2>
            <p className="text-gray-300">contato@forest.com</p>
          </div>

          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">
              Telefone
            </h2>
            <p className="text-gray-300">21 99999-9999</p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-xl bg-verde-900 shadow-2xl p-4 lg:p-8"
      >
        <div className="grid gap-1">
          <label className="text-white" htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="input"
            type="text"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1">
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input"
              type="email"
              required
            />
          </div>

          <div className="grid gap-1">
            <label className="text-white" htmlFor="telefone">
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              className="input"
              placeholder="(21) 00000-0000"
              type="text"
            />
          </div>
        </div>

        <div className="grid gap-1">
          <label className="text-white" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows={5}
            className="input resize-none"
            required
          />
        </div>

        <button
          disabled={loading}
          className={`place-self-start py-2 px-4 rounded-full transition ${
            loading
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-verde-400 text-verde-900 hover:opacity-80'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar Email'}
        </button>

        {enviado && (
          <p className="text-green-400 text-sm">
            ✅ Mensagem enviada com sucesso!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contato;
