import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
import { Topico1 } from './topicos/topico1'
import { Topico2 } from './topicos/topico2'
import { Topico3 } from './topicos/topico3'
import { Topico4 } from './topicos/topico4'

const topicos = [
  {
    titulo: 'Aspectos Gerais',
    detalhes: <Topico1 />,
  },
  {
    titulo: 'Equivalência de Estágio',
    detalhes: <Topico2 />,
  },
  {
    titulo: 'Disciplina de Estágio e Práticas Profissionais',
    detalhes: <Topico3 />,
  },
  {
    titulo: 'Práticas Profissionais',
    detalhes: <Topico4 />,
  },
  {
    titulo: 'Bom dia Com Elemento',
    detalhes: '<Topico1 />',
  },
  {
    titulo: 'Bom dia Sem Elemento',
    detalhes: 'Boa tarde',
  },
  {
    titulo: 'Bom dia',
    detalhes: 'Boa tarde',
  },
  {
    titulo: 'Bom dia',
    detalhes: 'Boa tarde',
  },
]

const accordionTriggerStyle = `
    text-left bg-zinc-500/[.5] my-2 p-2 
    rounded-sm max-sm:text-xl text-2xl text-left 
    bg-zinc-500/[.5] my-2 p-2 
    rounded-sm max-sm:text-xl text-2xl`

const accordionContentStyle = 'flex flex-col items-center'

// const childrenAccordion = 'w-4/5'

export const accordionContentYellow =
  'flex text-base bg-zinc-500/[.2] p-2 m-1 rounded-lg flex-col gap-2 indent-10'

export const accordionTriggerYellow =
  'p-2 text-left m-2 text-xl rounded-sm bg-zinc-500/[.5]'

export const accordionTriggerRed = 'p-2 m-2 rounded-sm bg-zinc-500/[.5]'

export function Box() {
  return (
    <>
      <Accordion type="single" collapsible>
        <div className="flex justify-center w-4/5 flex-wrap gap-20 ml-40 items-center">
          {topicos?.map((t, i) => {
            return (
              <AccordionItem value={`item-${i}`} key={i.toString()}>
                <AccordionTrigger
                  className={`px-10 py-5 text-black ${accordionTriggerStyle}`}
                >
                  {t.titulo}
                </AccordionTrigger>
                <AccordionContent
                  className={`text-black ${accordionContentStyle}`}
                >
                  {t.detalhes}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </div>
      </Accordion>
    </>
  )
}
