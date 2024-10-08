import { accordionContentYellow } from '../Box'

const topicos = [
  {
    detalhes: (
      <p>
        A <strong>matrícula</strong> na disciplina de Estágio ou Práticas
        Profissionais deve ser efetuada{' '}
        <strong>diretamente pelo SIGA, no período de rematrículas</strong>. Ela
        fica presente em sua Grade Curricular, bem como ficará em seu Histórico
        Escolar. Após estar matriculado, o setor de estágio irá entrar em
        contato diretamente por e-mail nas próximas semanas. <br /> Dúvidas
        podem ser encaminhadas para o e-mail do setor:{' '}
        <a
          className="text-blue-500 underline"
          href="f132.estagio@fatec.sp.gov.br"
        >
          f132.estagio@fatec.sp.gov.br
        </a>
      </p>
    ),
  },
]

export function Topico3() {
  return (
    <>
      <div className={`pl-5 ml-5 gap-2 ${accordionContentYellow}`}>
        {topicos.map(t => (
          <p>{t.detalhes}</p>
        ))}
      </div>
    </>
  )
}
