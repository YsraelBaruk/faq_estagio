import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'
import { accordionContentYellow } from '../Box'

const topicos = [
  {
    titulo: `
            Automação Industrial
        `,
    detalhes: (
      <div className="flex flex-col">
        Os alunos de Automação Industrial têm a disciplina de "Práticas
        Profissionais" em sua grade curricular, sendo obrigatória para a
        conclusão do curso. Ela está disponível a partir do terceiro semestre e
        es práticas podem ocorrer através de: <br />
        <p>
          <strong>Estágio supervisionado remunerado:</strong> verifique as
          condições na aba de Estágio Supervisionado;
        </p>
        <p>
          <strong>Equivalência de estágio:</strong> verifique as condições na
          aba de (Equivalência de Estágio);
        </p>
        <p>
          <strong>Trabalho de Graduação:</strong> uma distinção importante para
          o curso de Automação Industrial é a possibilidade de desenvolver as
          práticas profissionais com base nos resultados obtidos pelo protótipo
          desenvolvido em seu Trabalho de Graduação. De acordo com as diretrizes
          acadêmicas vigentes, o trabalho de graduação pode ser empregado como
          meio de validar o estágio, sob a condição de que o aluno esteja
          cursando o{' '}
          <strong>
            6° semestre e que o referido trabalho assuma a forma de um
            protótipo.
          </strong>
          Para entender mais sobre essa condição, procure contato com o
          Coordenador de seu curso.
        </p>
      </div>
    ),
  },
  {
    titulo: `
        Produção Fonográfica
    `,
    detalhes: (
      <div className="flex flex-col">
        <p>
          {' '}
          Na grade curricular dos alunos de Produção Fonográfica, consta a
          disciplina de "Práticas Profissionais", obrigatória para a conclusão
          do curso.{' '}
          <strong>Ela está disponível desde o primeiro semestre</strong> e estas
          práticas podem ser realizadas por meio de:
        </p>
        <p>
          <strong>Estágio supervisionado remunerado:</strong> verifique as
          condições na aba de Estágio Supervisionado;
        </p>
        <p>
          <strong>Equivalência de estágio:</strong> verifique as condições na
          aba de Equivalência de Estágio;
        </p>{' '}
        <p>
          <strong>Atuação em Monitorias de Disciplinas:</strong> Os estudantes
          que atuarem em
          <strong>
            {' '}
            Monitorias Oficiais e Específicas de Disciplinas da Fatec Tatuí
          </strong>{' '}
          poderão pleitear que essa atividade seja utilizada para equivalência
          da disciplina de Práticas Profissionais. Nesse caso o estudante deverá
          apresentar para o Setor de Estágios os documentos apresentados na
          Seção “modelos” denominado
          {/* ** eu vou adicionar o link depois. */}
        </p>
        <p>
          <strong>Atuação nos Núcleos da Fatec:</strong> uma particularidade do
          curso de Produção Fonográfica é a oportunidade de desenvolver essas
          práticas por meio dos Núcleos existentes na Fatec. Os{' '}
          <strong>núcleos regularmente vinculados</strong>, os quais utilizarão
          os documentos para a validação de suas práticas profissionais, são:
        </p>
        <p className="text-zinc-500 font-bold">
          {' '}
          <p>Gravadora Experimental - Prof. José Carlos Pires Junior </p>
          <p>ID-Art - Prof. Lucas Correia Meneguette </p>
          <p>Liga Eventos - Prof. Luis Antonio Galhego Fernandes </p>
          <p>NAV - Prof. Fabrizio Di Sarno </p>
          <p>NAGA - Prof. Lucas Correia Meneguette </p>
          <p>
            Laboratório de Criação Musical - Prof. José Carlos Pires Junior{' '}
          </p>
          <p>Liga de Plugins - Prof. Luis Antonio Galhego Fernandes</p>
          <p>Linguagens - Profa. Dulce Helena Soares Villa Nova</p>
        </p>
        <p>
          <strong>
            Para obter informações adicionais sobre a validação do estágio a
            partir do núcleo, favor contatar o Coordenador do Curso ou o
            Professor responsável pelo Núcleo.
          </strong>
        </p>
      </div>
    ),
  },
]

export function Topico4() {
  return (
    <>
      <div className="gap-10 flex flex-col justify-center items-start ml-14">
        <p className="w-1/2">
          Os estudantes de <strong>Automação Industrial</strong> e{' '}
          <strong>Produção Fonográfica</strong> precisam realizar práticas
          profissionais como parte obrigatória de seus cursos.
        </p>
        <Accordion type="single" collapsible>
          {topicos?.map((t, i) => {
            return (
              <AccordionItem value={`item-${i}`} key={i.toString()}>
                <AccordionTrigger>{t.titulo}</AccordionTrigger>
                <AccordionContent className={accordionContentYellow}>
                  <p>{t.detalhes}</p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </>
  )
}
