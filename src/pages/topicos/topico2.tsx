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
        Requisitos de Equivalência para o Estágio
    `,
    detalhes: (
      <p>
        Aos estudantes dos cursos de{' '}
        <strong>Gestão da Tecnologia da Informação, Gestão Empresarial</strong>{' '}
        e <strong>Manutenção Industrial</strong>, nos quais o estágio é
        obrigatório, é possível solicitar a{' '}
        <strong>Equivalência de Estágio</strong> caso cumpram os seguintes
        requisitos: <br />{' '}
        <strong>Comprovar atividades profissionais na área</strong>, totalizando
        mais de 240 horas, durante o período de matrícula na Fatec Tatuí. Para
        essa comprovação, o estudante deve apresentar um dos seguintes
        documentos:
      </p>
    ),
    disc: [
      {
        t: (
          <p>
            <strong>Registro profissional na CTPS</strong> (Carteira de Trabalho
            e Previdência Social);
          </p>
        ),
      },
      {
        t: (
          <p>
            <strong>Registro profissional na CTPS</strong> (Carteira de Trabalho
            e Previdência Social);
          </p>
        ),
      },
      {
        t: (
          <p>
            <strong>Registro profissional na CTPS</strong> (Carteira de Trabalho
            e Previdência Social);
          </p>
        ),
      },
    ],
  },
]

export function Topico2() {
  return (
    <>
      <Accordion collapsible type="single">
        {topicos?.map((t, i) => {
          return (
            <AccordionItem value={`item-${i}`} key={i.toString()}>
              <AccordionTrigger className={accordionTriggerYellow}>
                {t.titulo}
              </AccordionTrigger>
              <AccordionContent className={accordionContentYellow}>
                <p className="indent-5 pl-5 ml-5 gap-2 flex flex-col">
                  {t.detalhes}
                  <ul className="indent-0 list-disc">
                    {t.disc?.map(l => (
                      <li>{l.t}</li>
                    ))}
                  </ul>
                </p>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
