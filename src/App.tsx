import { Box } from './pages/Box'

export function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-300 rounded-3xl w-4/5 flex flex-col justify-center items-center gap-12 ">
        <h1 className="text-3xl p-5">Dúvidas Frequentes</h1>
        <div className="flex flex-col justify-center items-center w-4/5 indent-5 gap-3">
          <p>
            Bem-vindo ao Portal do <strong>Estágio</strong> e das{' '}
            <strong>Práticas Profissionais</strong> da Fatec Tatuí. Este espaço
            é dedicado à auxiliar você no processo de validação de sua
            disciplina! Aqui, você encontrará{' '}
            <strong>
              recursos e informações essenciais para facilitar o processo de
              estágio
            </strong>{' '}
            e/ou <strong>práticas profissionais</strong>, fundamentais para o
            seu desenvolvimento acadêmico e profissional e obrigatórios para sua
            graduação.
          </p>
          <p>
            Explore os links abaixo para entender como funciona a disciplina de
            Estágio e Práticas Profissionais em seu curso específico e para
            acessar recursos úteis que irão ajudá-lo ao longo do caminho.
            Estamos aqui para ajudá-lo a alcançar seus objetivos profissionais e
            acadêmicos.
          </p>
        </div>
        <Box />
      </div>
    </div>
  )
}
