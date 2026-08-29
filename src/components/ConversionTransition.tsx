import React from 'react'

export function ConversionTransition() {
  return (
    <section className="my-14 sm:my-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#132842] tracking-tight mb-6 font-title">
        Se a sua empresa está no mesmo corredor
      </h2>

      {/* Corridor items */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8">
        {[
          'Dívida entre R$ 1 milhão e R$ 50 milhões ou mais.',
          'Execução.',
          'Leilão.',
          'Bloqueio.',
          'Juros que não fecham.',
        ].map((item) => (
          <span
            key={item}
            className="px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-sm sm:text-base font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="editorial-article-body mb-8">
        <p className="text-lg sm:text-xl font-normal text-slate-800">
          O caminho não é esperar o banco tomar o que levou uma vida para construir.
        </p>
      </div>

      {/* Centralizado conforme solicitado */}
      <div className="my-8 sm:my-10 py-6 sm:py-8 border-y-2 border-[#132842] text-center">
        <p className="font-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#132842] leading-[1.3] tracking-tight text-center">
          É auditar.{' '}
          <span className="text-[#2b86ff]">Proteger.</span>{' '}
          <span className="block sm:inline mt-1 sm:mt-0 text-slate-800">
            Renegociar com número na mesa.
          </span>
        </p>
      </div>

      <div className="space-y-3 text-lg sm:text-xl text-slate-700 font-light">
        <p>Quem já foi bancário conhece o sistema por dentro.</p>
        <p className="font-normal text-[#132842]">
          Quem audita 10 anos de conta sabe onde a cobrança estoura.
        </p>
      </div>
    </section>
  )
}
