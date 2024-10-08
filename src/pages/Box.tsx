import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
import { Topico1 } from './topicos/topico1'

const topicos = [
  {
    titulo: 'Bom dia Com Elemento',
    detalhes: <Topico1 />,
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

export function Box() {
  return (
    <>
      <Accordion type="single" collapsible>
        <div className="flex justify-center w-4/5 flex-wrap gap-20 ml-40 items-center">
          {topicos?.map((t, i) => {
            return (
              <AccordionItem value={`item-${i}`} key={i.toString()}>
                <AccordionTrigger className="px-10 py-5 text-black">
                  {t.titulo}
                </AccordionTrigger>
                <AccordionContent className="text-black">
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
