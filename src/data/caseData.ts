export interface CaseData {
  category: string
  headline: string
  subtitle: string
  metadata: {
    badge: string
    readingTime: string
  }
}

export const editorialCaseData: CaseData = {
  category: 'CASE REAL • DÍVIDAS BANCÁRIAS',
  headline: 'O banco cobra. A empresa sufoca. O patrimônio entra na mira.',
  subtitle: 'O empresário alagoano da construção civil já não via saída.',
  metadata: {
    badge: 'CASE VERUM',
    readingTime: 'Leitura: 4 minutos',
  },
}
