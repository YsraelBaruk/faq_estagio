import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'

const topicos = [
  {
    titulo: 'Bom dia',
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
    titulo: 'Bom dia',
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
    titulo: 'Bom dia',
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
    titulo: 'Bom dia',
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
    <Accordion type="single" collapsible>
      <div className="flex flex-wrap">
        {topicos?.map((t, i) => {
          return (
            <AccordionItem value={`item-${i}`} key={i.toString()}>
              <AccordionTrigger className="px-10 py-5 text-black">
                {t.titulo}
              </AccordionTrigger>
              <AccordionContent className="px-10 text-black">
                {t.detalhes}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </div>
    </Accordion>
  )
}
