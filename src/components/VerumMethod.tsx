import React from 'react'

export function VerumMethod() {
  const frentes = [
    {
      num: '01',
      title: 'PROTEÇÃO PATRIMONIAL',
      desc: 'Proteção patrimonial, enquanto o direito é discutido.',
    },
    {
      num: '02',
      title: 'AUDITORIA DE 10 ANOS',
      desc: 'Auditoria dos últimos 10 anos, para gerar créditos.',
    },
    {
      num: '03',
      title: 'CONDUÇÃO DAS TRATATIVAS',
      desc: 'Condução das tratativas, para aliviar a pressão.',
    },
    {
      num: '04',
      title: 'TEMPO PARA REESTRUTURAR',
      desc: 'Tempo para reestruturar o caixa e pagar o que for justo.',
    },
  ]

  return (
    <section id="method" className="my-12 sm:my-16 text-left">
      <h2 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold text-[#132842] tracking-tight mb-4 font-title">
        O ponto cego do empresário endividado
      </h2>

      <div className="editorial-article-body mb-8 text-left">
        <p className="text-lg text-slate-700 font-medium text-left">
          Enquanto o banco aperta, a Verum atua em quatro frentes:
        </p>
      </div>

      {/* 4 Frentes - Alinhadas à esquerda */}
      <div className="border-t border-slate-200 divide-y divide-slate-200 text-left">
        {frentes.map((item) => (
          <div
            key={item.num}
            className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline transition-colors hover:bg-slate-50/50 text-left"
          >
            <div className="md:col-span-4 flex items-baseline justify-start gap-3 text-left">
              <span className="font-mono text-xs text-[#2b86ff] font-semibold">
                {item.num}
              </span>
              <h3 className="text-sm sm:text-base font-bold tracking-[0.1em] text-[#132842] uppercase font-title text-left">
                {item.title}
              </h3>
            </div>
            <div className="md:col-span-8 text-left">
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed text-left">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 text-base sm:text-lg font-semibold text-[#132842] text-left">
        Não o que o banco apresenta como fato consumado.
      </div>
    </section>
  )
}
