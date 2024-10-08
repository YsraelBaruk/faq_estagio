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
        Quem pode contratar estagiários?
        `,
    detalhes: (
      <p>
        Qualquer pessoa jurídica, com CNPJ ativo, pode efetuar a contratação de
        estagiários junto ao Centro Paula Souza. A contratação deve ocorrer
        antes do estágio ter início e é formalizada através de assinatura do
        Termo de Compromisso de Estágio (TCE), cujo modelo deixamos disponível
        na seção modelos e documentos nesse portal. Também podem contratar
        estagiários os profissionais liberais com registros em Conselhos de
        Classe (CRA, CREA, OAB, entre outros).
      </p>
    ),
  },
  {
    titulo: `
        Quais são as agências de integração que podem contratar estagiários?
    `,
    detalhes: (
      <p>
        Outra forma de conseguir estágio é através das Agências de Integração,
        que conectam estagiários e empresas. A Fatec sempre precisa participar
        do processo, assinando os documentos para que sejam legalizados como
        estágios. É importante lembrar que a faculdade só assina o documento de
        estágio de uma agência de integração se ela tiver convênio com o CPS.
        Caso tenha dúvidas em relação a isso, é possível entrar em contato
        através do e-mail: f132.estagio@fatec.sp.gov.br. Para ver quais agências
        têm convênio com as Fatecs, consulte a lista abaixo:
      </p>
    ),
    decimal: [
      {
        t: 'Z-Estágios (Zuna Estágios)',
      },
      {
        t: 'Super Estágios',
      },
      {
        t: 'NUBE – Núcleo Brasileiro de Estágios Ltda',
      },
      {
        t: 'Global Estágios',
      },
      {
        t: 'CIEE (de São Paulo)',
      },
      {
        t: 'Estagiar Serviços de Integração Empresa Escola (Estagiar)',
      },
      {
        t: 'Metta Integradora Empresa Escola (Metta)',
      },
      {
        t: 'Companhia de Estágios / PPM Human Resources (CIA de Estágios)',
      },
      {
        t: 'Futura Integrador Empresa Escola (Futura Estágios)',
      },
      {
        t: 'Agieer Consultoria de Talentos Ltda',
      },
      {
        t: 'MKM Mafii Ltda. (Fantasia: Pensecon RH)',
      },
      {
        t: 'Instituto Euvaldo LODI',
      },
      {
        t: 'INTAL – Instituto Talentos',
      },
      {
        t: 'Conexão Estágios Ltda',
      },
      {
        t: 'AEHDA – Associação de Educação do Homem de Amanhã – Araras',
      },
      {
        t: 'IUDS – Instituto Universal de Desenvolvimento Social',
      },
      {
        t: 'Inter Estágios Eireli ME',
      },
      {
        t: 'NAPE – Núcleo Assistencial para Estágio Ltda',
      },
      {
        t: 'ESPRO – Associação de Ensino Social Profissionalizante',
      },
      {
        t: `G. L. D'Aolio Jornal e Estágios`,
      },
      {
        t: 'Instituto Via de Acesso Ruy',
      },
      {
        t: 'Abre Estágios e Emprego – TL Serviços de Apoio Administrativo para Empresas Ltda',
      },
      {
        t: 'IUDS Estagiando Ltda',
      },
      {
        t: 'AGIEL – Agência de Integração Empresa Escola Ltda',
      },
      {
        t: 'Wall Jobs Tecnologias Ltda',
      },
      {
        t: 'IAPE – Instituto de Apoio a Programas de Estágio',
      },
      {
        t: 'Enterprise Solutions Ltda',
      },
      {
        t: 'Estágio Sul RH',
      },
      {
        t: 'SAEE – Soluções de Aprendizagem Empresa Escola Eireli',
      },
      {
        t: 'Agiliza Serviços Empresariais Ltda',
      },
      {
        t: 'AGIPE – Agência de Integração de Pessoas Ltda.',
      },
      {
        t: 'Empregar Já Estágios e Efetivos Ltda',
      },
      {
        t: 'ABRH-RS Associação Brasileira de Recursos Humanos',
      },
      {
        t: 'Belottis Consultoria e Treinamentos Ltda',
      },
      {
        t: 'RH Unoprime – PR Serviços, Recrutamento e Seleção Ltda',
      },
      {
        t: 'ABRE – São José dos Campos – Sampaio Trabalhos e Serviços Cadastrais Ltda',
      },
      {
        t: 'Fibra RH – Equilibra Soluções Adm. e Treinamentos Gerenciais Ltda',
      },
      {
        t: 'E Pro Soluções e Estágios Ltda',
      },
      {
        t: 'Ativa Gestão de Estágios e Serviços Ltda',
      },
      {
        t: 'Mega Estágios Ltda',
      },
      {
        t: 'CIEE/RJ – Centro de Integração Empresa Escola do Rio de Janeiro',
      },
      {
        t: 'Academia do Universitário Desenvolvimento Profissional Ltda',
      },
      {
        t: 'Meso Carreira e Gestão Ltda',
      },
      {
        t: 'PROEAJA – Projeto Educação de Adultos e Jovens de Araraquara',
      },
      {
        t: 'Quali Serviços de Integração e Gerenciamento de Contratos Ltda',
      },
      {
        t: 'CAEEP – Treinamentos e Estágios Ltda',
      },
      {
        t: 'ITEMM – Instituto Técnico Educacional Mirian Menchini',
      },
      {
        t: 'CIDE – Capacitação, Inserção e Desenvolvimento',
      },
      {
        t: 'Ramires e Tavares Ltda',
      },
      {
        t: 'Fundação Mirim Tupã – Núcleo de Atendimento ao Jovem Aprendiz',
      },
      {
        t: 'Prospere Estágios e Recursos Humanos Ltda',
      },
      {
        t: 'ISBET – Instituto Brasileiro Pro-Educação, Trabalho e Desenvolvimento',
      },
      {
        t: 'Capacitare Recursos Humanos Eireli',
      },
      {
        t: 'Stag Central de Estágios Ltda',
      },
      {
        t: 'Pró-Jovem – Fábio Rodrigo do Nascimento EIRELI',
      },
      {
        t: 'Avance Integradora de Estágios EIRELI',
      },
      {
        t: 'Integrar Soluções em Estágios Ltda',
      },
      {
        t: 'Evo Estágios VP Seleção e consultoria Ltda',
      },
      {
        t: 'Evo Estágios Indaiatuba – R1 Serviços Administrativos e Treinamento de Pessoal EIRELI',
      },
      {
        t: 'Érica Ramos de Moura Treinamentos e Consultoria ME – Grupo Absolute',
      },
      {
        t: 'Santo Amaro Ltda',
      },
      {
        t: 'Kmi Centro de Integração Empresa Escola Ltda',
      },
      {
        t: 'Evo Estágios Jaú – Daisa Cristina Siqueira Basso Corretora de Seguros',
      },
      {
        t: 'Cavalcanti Consultoria Ltda',
      },
      {
        t: 'CAMPS – Centro de Aprendizagem e Mobilização Profissional e Social',
      },
      {
        t: 'UPA – Universidade Patativa de Assaré',
      },
      {
        t: 'Web Service Ltda',
      },
      {
        t: 'Inova Estágios Ltda',
      },
      {
        t: 'Brilho Próprio Administração, Treinamento e Desenvolvimento Ltda',
      },
      {
        t: 'CIEE/RS – Centro de Integração Empresa Escola do Rio Grande do Sul',
      },
      {
        t: 'Estágio Total Ltda',
      },
      {
        t: 'Oportuni Soluções em Recursos Humanos Ltda',
      },
      {
        t: 'INV RH – Girardini Silva Gestão de Pessoas Eireli',
      },
      {
        t: 'Alpha Estágio Ltda',
      },
      {
        t: 'CPS – Centro de Promoção Social da Paróquia Nossa Sra. das Dores de Bariri',
      },
      {
        t: 'Gente Recursos Humanos – Simone Marcolino',
      },
      {
        t: 'Pyxo Estágios Agente de Integração Ltda',
      },
      {
        t: 'Edukar Estágios, Comércio e Promoção em Vendas Ltda',
      },
      {
        t: 'JCP Assessoria em Recursos Humanos Ltda',
      },
      {
        t: 'Associação de Educação do Homem de Amanhã de Várzea Paulista',
      },
      {
        t: 'Dinardi Passini Consultoria em Recursos Humanos Ltda – Evo Santos',
      },
      {
        t: 'Evo Estágios Ibitinga – Paulo Henrique Takakura',
      },
      {
        t: 'CA&T Conecta Agenciamento & Terceirização Ltda',
      },
      {
        t: 'Universia Brasil S.A',
      },

      //Analisando a lista do Trello olho no olho
      {
        t: 'Luppino Agência de Integração, Recrutamento e Seleção (Mais Estágios)',
      },
      {
        t: 'Vitah Apoio Administrativo Eireli',
      },
      {
        t: 'GNE – Gerenciamento Empresarial de Estágios Ltda',
      },
      {
        t: 'IEGE – Instituto Brasileiro de Educação Profissional Ltda',
      },
      {
        t: 'ASH Talentos Ltda',
      },
      {
        t: 'G&G Recursos Humanos Ltda. – Prime Estágios',
      },
      {
        t: 'Jeanete G. Duarte',
      },
      {
        t: 'Adm Bplan Ltda. – RHF Talentos',
      },
      {
        t: 'Instituto de Pesquisas Econômicas – IPEFAE',
      },
      {
        t: 'Ser Especial – Associação Assistencial de Integração ao Trabalho',
      },
      {
        t: 'Bem Jobs – Willian Domingos Cardoso',
      },
      {
        t: 'MUDES – Fundação Movimento Universitário de Desenvolvimento Econômico e Social',
      },
      {
        t: 'Philia Assessoria e Consultoria Empresarial Ltda. – Adonai RH',
      },
      {
        t: 'Estágios CIN - Centro de Integração de Estudantes',
      },
      {
        t: 'Qualy Mão-de-Obra Temporária Ltda',
      },
      {
        t: 'F.A. Morelli Apoio à Educação Ltda',
      },
      {
        t: 'Guarda Mirim de Ituverava – GMI',
      },
      {
        t: 'Evo Estágios Bebedouro Ltda',
      },
      {
        t: 'Avantti Recrutamento e Seleção Ltda',
      },
      {
        t: 'Deal Solução Organizacional – RHF Estágios',
      },
      {
        t: 'Serviço de Orientação Multidisciplinar para Adolescentes de Americana – SOMA – Americana',
      },
      {
        t: 'Futuro Absoluto Treinamentos Ltda',
      },
      {
        t: 'Facilyt Assessoria Empresarial',
      },
      {
        t: 'Estagiare – Complexo Educacional GP Ltda',
      },
      {
        t: 'Mais Estágios Ltda',
      },
      {
        t: 'Portal do Estágio Ltda',
      },

      //Analisado
      { t: 'Adonai RH Assessoria e Consultoria Ltda' },
      { t: 'Super Estágios Ltda' },
      { t: 'Instituto Cusma e Silva Ltda' },
      { t: 'RH Consultoria e Assessoria Empresarial Ltda' },
    ],
  },
]

export function Topico5() {
  return (
    <>
      <Accordion type="single" collapsible>
        {topicos?.map((t, i) => {
          return (
            <AccordionItem value={`item-${i}`} key={i.toString()}>
              <AccordionTrigger className={accordionTriggerYellow}>
                {t.titulo}
              </AccordionTrigger>
              <AccordionContent className={accordionContentYellow}>
                <p className="indent-10 ml-5 gap-2 flex flex-col">
                  {t.detalhes}
                </p>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
