import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'
import { accordionContentYellow, accordionTriggerYellow } from '../Box'

const topicos = [
  {
    titulo: `
    Estágio Supervisionado
    `,
    detalhes: (
      <p>
        O estágio é regulamentado para todos os cursos da Fatec Tatuí, em
        conformidade com as disposições da{' '}
        <strong>Lei do Estágio, nº 11.788/2008</strong>. O Estágio
        Supervisionado é um ato educativo que integra a participação do
        estudante no mercado de trabalho, com supervisão da Faculdade durante
        todo o processo. Na Fatec Tatuí, o estágio é configurado da seguinte
        maneira:
      </p>
    ),
    lowerAlpha: [
      {
        t: 'Estágio Obrigatório: Nos cursos de Gestão da Tecnologia da Informação, Gestão Empresarial e Manutenção Industrial, a disciplina de estágio faz parte da carga horária do curso e requer uma comprovação de atividades totalizando 240 horas.',
      },
      {
        t: 'Estágio Não-obrigatório: Nos cursos de Tecnologia em Automação Industrial e Produção Fonográfica, o estágio não é obrigatório. Contudo, a disciplina de Práticas Profissionais é exigida em substituição ao estágio.',
      },
      {
        t: 'Para os cursos de Análise e Desenvolvimento de Sistemas e Processos Gerenciais, a prática do estágio é permitida, porém não há uma disciplina relacionada no Plano de Curso. Portanto, o estudante não precisa desenvolver práticas pedagógicas específicas para essa atividade.',
      },
    ],
    detalhe: `
        Essas diretrizes visam fornecer clareza sobre os requisitos de estágio para os diferentes cursos oferecidos na Fatec Tatuí, garantindo uma experiência educacional enriquecedora e alinhada com as práticas profissionais do mercado.
    `,
  },
  {
    titulo: `
    O que é estágio?
    `,
    detalhes: (
      <p>
        O Estágio é um <strong>Ato Educativo Supervisionado</strong>, definido
        pela Lei nº 11.708 de 2008 (Lei do Estágio) e que faz parte, como
        <strong>componente obrigatório</strong>, da Grade Curricular dos Cursos
        de{' '}
        <strong>Gestão da Tecnologia da Informação, Gestão Empresarial</strong>{' '}
        e <strong>Manutenção Industrial</strong>, representando 240 horas do
        total da graduação.
        <br />O estágio, assim como todas as outras disciplinas de sua
        graduação, demandará que seja realizada uma matrícula na disciplina e a
        entrega de relatórios, ao qual receberão orientação do setor, quando
        estiver matriculado.
      </p>
    ),
  },
  {
    titulo: `
    Sobre o que fala a Lei do Estágio?
    `,
    detalhes: (
      <p>
        O Estágio é regulamentado pelo{' '}
        <strong>Decreto n. 52.756, de 27 de fevereiro de 2008</strong> e pela
        <strong>Lei nº 11.708 de 2008 (Lei do Estágio)</strong>. O Programa de
        Estágios em órgãos e entidades da Administração Pública Estadual Direta,
        Indireta e Fundacional. Este programa é fundamental para regular as
        oportunidades de estágio, sendo realizado mediante processo seletivo
        público. Destaca-se que a Faculdade de Tecnologia de Tatuí (Fatec)
        oferece suporte aos seus alunos e às empresas durante o processo de
        estágio, contando com um programa bem estruturado.{' '}
        <strong>
          Além disso, é importante ressaltar que a atividade de estágio é
          obrigatória para alguns dos cursos oferecidos pela instituição.
        </strong>
      </p>
    ),
  },
  {
    titulo: `
    O que são as Práticas Profissionais?
    `,
    detalhes: (
      <p>
        A disciplina de <strong>Práticas Profissionais</strong> está presente no
        Plano de Curso de <strong>Automação Industrial</strong> e de{' '}
        <strong>Produção Fonográfica</strong>. Assim como o estágio, seu
        objetivo é integrar o estudante ao Mercado de Trabalho e sua comprovação
        será analisada pedagogicamente, através de matrícula regular na
        disciplina e entregas de relatórios.
      </p>
    ),
  },
]

export function Topico1() {
  return (
    <>
      <Accordion collapsible type="single">
        <div className="justify-center items-center w-11/12 flex-col flex">
          {topicos?.map((t, i) => {
            return (
              <AccordionItem value={`item-${i}`} key={i.toString()}>
                <AccordionTrigger className={accordionTriggerYellow}>
                  {t.titulo}
                </AccordionTrigger>
                <AccordionContent className={accordionContentYellow}>
                  <p className="indent-10 ml-5 gap-2 flex flex-col">
                    {t.detalhes}
                    <ul className="indent-0 list-lowerAlpha">
                      {t.lowerAlpha?.map(t => (
                        <li key={t.t}>{t.t}</li>
                      ))}
                    </ul>
                    <p className="indent-0">{t.detalhe}</p>
                  </p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </div>
      </Accordion>
    </>
  )
}
