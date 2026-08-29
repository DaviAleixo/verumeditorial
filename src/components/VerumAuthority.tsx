import React from 'react'

export function VerumAuthority() {
  const stats = [
    {
      value: 'R$ 15 BILHÕES',
      label: 'em movimentações auditadas',
    },
    {
      value: 'R$ 150 MILHÕES',
      label: 'recuperados para clientes',
    },
    {
      value: '+4.500',
      label: 'contas analisadas',
    },
  ]

  return (
    <section id="authority" className="my-14 sm:my-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#132842] tracking-tight mb-4 font-title">
        15 anos. R$ 15 bilhões auditados. R$ 150 milhões recuperados.
      </h2>

      <div className="editorial-article-body mb-6">
        <p className="text-lg text-slate-700">
          A Verum se posiciona como especialista em gestão de dívidas bancárias empresariais e rurais.
        </p>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 text-center">
          No portfólio oficial:
        </p>
      </div>

      {/* Institutional Strip - Centralizado */}
      <div className="bg-[#132842] text-white rounded-xl p-6 sm:p-10 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-4 md:pt-0 md:px-4' : 'md:px-4'
              }`}
            >
              <span className="font-title text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-none text-center">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-snug text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-lg font-medium text-slate-800 text-center">
        O caso de Alagoas não é isolado.
      </p>
    </section>
  )
}
