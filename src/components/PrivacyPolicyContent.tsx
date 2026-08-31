import React from 'react'

export function PrivacyPolicyContent() {
  return (
    <div className="text-[#444444] text-[15px] sm:text-base leading-relaxed space-y-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#132842] tracking-tight mb-4">
        Política Privacidade
      </h2>

      <p>
        A sua privacidade é importante para nós. É política do Grupo Verum respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site{' '}
        <a
          href="https://verumeditorial.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2b86ff] font-medium hover:underline"
        >
          Grupo Verum
        </a>
        , e outros sites que possuímos e operamos.
      </p>

      <p>
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
      </p>

      <p>
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </p>

      <p>
        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
      </p>

      <p>
        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas{' '}
        <a
          href="https://politicaprivacidade.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#2b86ff] font-medium hover:underline"
        >
          políticas de privacidade
        </a>
        .
      </p>

      <p>
        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
      </p>

      <p>
        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
      </p>

      {/* Cookies & Google AdSense List */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 sm:p-6 my-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#132842] mb-3">
          Uso de Cookies e Publicidade
        </h4>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li>
            O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
          </li>
          <li>
            Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
          </li>
          <li>
            Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
          </li>
          <li>
            Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
          </li>
        </ul>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-[#132842] tracking-tight pt-4">
        Compromisso do Usuário
      </h3>
      <p>
        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Grupo Verum oferece no site e com caráter enunciativo, mas não limitativo:
      </p>
      <ul className="list-none space-y-2.5 pl-2 sm:pl-4">
        <li className="flex items-start gap-2">
          <span className="font-semibold text-[#132842]">A)</span>
          <span>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-semibold text-[#132842]">B)</span>
          <span>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-semibold text-[#132842]">C)</span>
          <span>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Grupo Verum, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold text-[#132842] tracking-tight pt-4">
        Mais informações
      </h3>
      <p>
        Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
      </p>

      <p className="text-xs text-slate-500 font-medium pt-3 border-t border-slate-200">
        Esta política é efetiva a partir de <strong>31 August 2026 22:24</strong>
      </p>
    </div>
  )
}
